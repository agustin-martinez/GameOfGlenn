import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/characters'
import { actions as actionsIdAdder} from '../features/idAdder'
import '../form.css';
import '../popup.css';



const AddCharacter = ({setShowAddChild}) => {
const dispatch = useDispatch();
const idToBeAdded = useSelector(state => state.idAdder)



//--------------------------------------------------------Persons
const [valueName, setValueName] = useState([]);
const [valueHomeworld, setValueHomeworld] = useState('');
const [valueStrength, setValueStrength] = useState([]);
const [valueIntelligence, setValueIntelligence] = useState([]);
const [valueBackstory, setValueBackstory] = useState([]);
const [character, setCharacter] = useState({mess: 'Ingen karaktär inlagd ännu'})

const [touchedStrength, setTouchedStrength] = useState(false);
const [touchedIntelligence, setTouchedIntelligence] = useState(false);
const [touchedHomeWorld, setTouchedHomeWorld] = useState(false);
const [touchedName, setTouchedName] = useState(false);

//fav
const handleChangeFormName = event => {
  setValueName(event.target.value);
};
const handleChangeFormHomeworld = event => {
  setValueHomeworld(event.target.value);
};
const handleChangeFormBackstory = event => {
  setValueBackstory(event.target.value);
};
const handleChangeFormStrength = event => {
  setValueStrength(event.target.value);
};
const handleChangeFormIntelligence = event => {
  setValueIntelligence(event.target.value);
};
//-----------------------------------------------

console.log(valueBackstory)
//----------------------------------Validation Person

let btnDisable = true;
let btnDisableName = true;
let btnDisableHomeworld = true;
let btnDisableStrength = true;
let btnDisableIntelligence = true;

const isValidLength = l => {
    if  (l.length < 2 || l.length > 20) 
    return false;
    else 
    return true;
  }

const isValidLengthBackstory = l => {
  if  (l.length === 260) 
  return false;
  else 
  return true;
}

const isValidNumber = x => {
  let maybeNumber = Number(x);
    if (x < 1 || x > 10) 
    return false;
    return !isNaN(maybeNumber)
}
//-------------------------------------------------------------

let cssClassName = '';
if( touchedName ) {
  if( isValidLength(valueName) )
    cssClassName = 'valid';
  else
    cssClassName = 'invalid'
}

let cssClassHomeworld = '';
if( touchedHomeWorld ) {
  if( isValidLength(valueHomeworld) )
    cssClassHomeworld = 'valid';
  else
    cssClassHomeworld = 'invalid'
}

let cssClassIntelligence = '';
if( touchedIntelligence ) {
  if( isValidNumber(valueIntelligence) )
    cssClassIntelligence = 'valid';
  else
    cssClassIntelligence = 'invalid'
}

let cssClassStrength = '';
if( touchedStrength ) {
  if( isValidNumber(valueStrength) )
    cssClassStrength = 'valid';
  else
    cssClassStrength = 'invalid'
}
//----------------------------------------
if( isValidNumber(valueStrength) ) {
cssClassStrength = 'valid';
}
//----------------------------------------

if( touchedName ) {
  if( isValidLength(valueName) )
    btnDisableName = false;
  else
    btnDisableName = true;
}

if( touchedHomeWorld ) {
  if( isValidLength(valueHomeworld) )
    btnDisableHomeworld = false;
  else
    btnDisableHomeworld = true;
}

if( touchedIntelligence ) {
  if( isValidNumber(valueIntelligence) )
    btnDisableIntelligence = false;
  else
    btnDisableIntelligence = true;
}

if( isValidNumber(valueStrength) ) {
  btnDisableStrength = false;
} else {
  btnDisableStrength = true;
}
//------------------------------------------------------


if (touchedName && touchedHomeWorld && touchedIntelligence &&
  !btnDisableName && !btnDisableHomeworld && !btnDisableIntelligence && !btnDisableStrength ) {
    btnDisable = false;
} 
//--------------------------------------------------------

let nameValMess = '';
if( touchedName ) {
  if( isValidLength(valueName) )
  nameValMess = ''
  else
  nameValMess = 'Fyll i minst 2 tecken och max 20, tack'
}

let homeWorldValMess = '';
if( touchedHomeWorld ) {
  if( isValidLength(valueHomeworld) )
  homeWorldValMess = ''
  else
  homeWorldValMess = 'Vänligen, välj en värld'
}

let intelligenceValMess = '';
if( touchedIntelligence ) {
  if( isValidNumber(valueIntelligence) )
    intelligenceValMess = ''
  else
    intelligenceValMess = 'Ange ett siffervärde mellan 1-10'
}

let strengthValMess = '';
if( touchedStrength ) {
  if( isValidNumber(valueStrength) )
    strengthValMess = ''
  else
    strengthValMess = 'Ange ett siffervärde mellan 1-10'
}

let backstoryValMess = '';
  if( isValidLengthBackstory(valueBackstory) ) {
  backstoryValMess = ''
  } else {
  backstoryValMess = 'Maxantalet tecken upnått (260 st)'
}

  function clearFormsPerson() {
    setValueName('');
    setValueHomeworld('');
    setValueIntelligence('');
    setValueStrength('');
    setValueBackstory('')
    
    setTouchedHomeWorld(false);
    setTouchedName(false);
    setTouchedIntelligence(false)
    setTouchedStrength(false)
  }

  const handleSubmit = event => {
  if (valueName && valueHomeworld && valueBackstory && valueIntelligence && valueStrength && idToBeAdded) {
    dispatch(actionsIdAdder.increase())
    dispatch(actions.addToCharacters({
    id: idToBeAdded, name: valueName, world: valueHomeworld,
    backstory: valueBackstory, strength: valueStrength, intelligence: valueIntelligence 
  }))
    setCharacter({name: valueName, mess: ' added to the world ', world: valueHomeworld});
  }

  clearFormsPerson()

  event.preventDefault();
};



const charactersForm = (
  <div>
    <form className="flexRowShow" onSubmit={handleSubmit} id="test">
    
    <span className="space-for-val">  <label>Förnamn, (efternamn)</label>  <span>{nameValMess}</span>  </span>

      <input type="text" className={cssClassName} value={valueName} placeholder="Fyll i förnamn (efternamn)"
      onChange={handleChangeFormName} onBlur={event => setTouchedName(true)} />

      <span className="space-for-val">  <label>Värld</label>  <span>{homeWorldValMess}</span>  </span>
      <select value={valueHomeworld} onChange={handleChangeFormHomeworld} onBlur={event => setTouchedHomeWorld(true)}
      className={cssClassHomeworld}>

        <option value="" disabled hidden>Världar...</option>
        <option value={'Hufvudstaden'}>Hufvudstaden</option>
        <option value={'Donsö'}>Donsö</option>
        <option value={'Slottsskogen'}>Slottsskogen</option>
        <option value={'Hisingen'}>Hisingen</option>
      </select>

      <span className="space-for-val">  <label>Backstory(Valfri)</label>  <span>{backstoryValMess}</span>  </span>
      <textarea value={valueBackstory} onChange={handleChangeFormBackstory} maxLength="260"
      placeholder="(Valfri) Bakgrundsstory, max 260 Tecken"></textarea>

      <span className="space-for-val">  <label>Intelligens</label>  <span>{intelligenceValMess}</span>  </span>
      <input type="text" maxLength="2" className={cssClassIntelligence} value={valueIntelligence} placeholder="Intelligens 1-10, , skriv in eller använd slider"
      onChange={handleChangeFormIntelligence} onBlur={event => setTouchedIntelligence(true)} />
      <input tabIndex="-1" type="range" min="1" max="10" value={valueIntelligence} className="slider"
      onChange={handleChangeFormIntelligence} onBlur={event => setTouchedIntelligence(true)}/>

      <span className="space-for-val">  <label>Styrka</label>  <span>{strengthValMess}</span>  </span>
      <input type="text" maxLength="2" className={cssClassStrength} value={valueStrength} placeholder="Styrka 1-10, , skriv in eller använd slider"
      onChange={handleChangeFormStrength} onBlur={event => setTouchedStrength(true)} />
      <input tabIndex="-1" type="range" min="1" max="10" value={valueStrength} className="slider"
      onChange={handleChangeFormStrength}/>

        
      <button className="btn-add" disabled={btnDisable} type="submit">Lägg till karaktär</button>
    </form>
  </div>
)

return (
<div className="add-popup">
  <div className="add-popup-content">
    <div className="add-popup-header">
      <span className="close" onClick={() => setShowAddChild(false)}>&times;</span>
      <h2>L<span className="font-add">Ä</span>gg till karakt<span className="font-add">Ä</span>r</h2>
    </div>
      <div className="add-popup-body">
        {charactersForm}
      </div>
        <div className="add-popup-footer">
          <span className="span-col-ora">{character.name}</span>
          {character.mess}
          <span className="span-col-ora">{character.world}</span>
        </div>
    </div>
  </div>
)
}

export default AddCharacter;