import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../features/characters'
import '../form.css';
import '../popup.css';



const EditCharacter = ({setShowAddChild}) => {
const dispatch = useDispatch();
const editCharacter = useSelector(state => state.editCharacter)
console.log(editCharacter)
// useEffect(() => {
//   console.log(editCharacter[0].character.name)
// }, [editCharacter]);

//--------------------------------------------------------Persons
const [valueName, setValueName] = useState(editCharacter[0].character.name);
const [valueHomeworld, setValueHomeworld] = useState(editCharacter[0].character.world);
const [valueStrength, setValueStrength] = useState([editCharacter[0].character.strength]);
const [valueIntelligence, setValueIntelligence] = useState(editCharacter[0].character.intelligence);
const [valueBackstory, setValueBackstory] = useState([editCharacter[0].character.backstory]);
const [valueId, setValueId] = useState([editCharacter[0].character.id]);
const [character, setCharacter] = useState({mess: 'Karaktären har inte ändrats ännu'})

const [touchedStrength, setTouchedStrength] = useState(true);
const [touchedIntelligence, setTouchedIntelligence] = useState(true);
const [touchedHomeWorld, setTouchedHomeWorld] = useState(true);
const [touchedName, setTouchedName] = useState(true);

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

const isValidNumber = x => {
  let maybeNumber = Number(x);
    if (x.length < 1 || x.length > 3) 
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
  nameValMess = 'Fyll i minst två bokstäver, tack'
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
    intelligenceValMess = 'Vänligen, ange ditt värde i siffror'
}

let strengthValMess = '';
if( touchedStrength ) {
  if( isValidNumber(valueStrength) )
    strengthValMess = ''
  else
    strengthValMess = 'Vänligen, ange ditt värde i siffror'
}

  function clearFormsPerson() {
    setValueName('');
    setValueHomeworld('');
    setValueIntelligence('');
    setValueStrength('');
    
    setTouchedHomeWorld(false);
    setTouchedName(false);
    setTouchedIntelligence(false)
    setTouchedStrength(false)
  }

  const handleSubmit = event => {
  if (valueName && valueHomeworld && valueBackstory && valueIntelligence && valueStrength) {
    dispatch(actions.editCharacter({
    id: valueId, name: valueName, world: valueHomeworld,
    backstory: valueBackstory, strength: valueStrength, intelligence: valueIntelligence 
  }))
    setCharacter({name: valueName, mess: ' added to the world ', world: valueHomeworld});
  }

  clearFormsPerson()

  event.preventDefault();
};
console.log(valueId)

const charactersForm = (
  <div>
    <form className="flexRowShow" onSubmit={handleSubmit} id="test">
    
      <span className="space-for-val">{nameValMess}</span>
      <input type="text" className={cssClassName} value={valueName} placeholder="Namn"
      onChange={handleChangeFormName} onBlur={event => setTouchedName(true)} />

      <span className="space-for-val">{homeWorldValMess}</span>
      <select value={valueHomeworld} onChange={handleChangeFormHomeworld} onBlur={event => setTouchedHomeWorld(true)}
      className={cssClassHomeworld}>

        <option value="" disabled hidden>Världar...</option>
        <option value={'Hufvudstaden'}>Hufvudstaden</option>
        <option value={'Donsö'}>Donsö</option>
        <option value={'Honö'}>Honö</option>
        <option value={'Hisingen'}>Hisingen</option>
      </select>

      <span className="space-for-val">{strengthValMess}</span>
      <textarea value={valueBackstory} onChange={handleChangeFormBackstory}
      placeholder="Din karaktärs bakgrundsstory(Valfri)"></textarea>

      <span className="space-for-val">{intelligenceValMess}</span>
      <input type="text" maxLength="1" className={cssClassIntelligence} value={valueIntelligence} placeholder="Intelligens 1-10"
      onChange={handleChangeFormIntelligence} onBlur={event => setTouchedIntelligence(true)} />
      <input type="range" min="1" max="10" value={valueIntelligence} className="slider"
      onChange={handleChangeFormIntelligence} onBlur={event => setTouchedIntelligence(true)}/>

      <span className="space-for-val">{strengthValMess}</span>
      <input type="text" maxLength="1" className={cssClassStrength} value={valueStrength} placeholder="Styrka 1-10"
      onChange={handleChangeFormStrength} onBlur={event => setTouchedStrength(true)} />
      <input type="range" min="1" max="10" value={valueStrength} className="slider"
      onChange={handleChangeFormStrength}/>

        
      <button className="btn-add" disabled={btnDisable} type="submit">Lägg till karaktär</button>
    </form>
  </div>
)

return (
<div id="myModal" className="add-popup">
  <div className="add-popup-content">
    <div className="add-popup-header">
      <span className="close" onClick={() => setShowAddChild(false)}>&times;</span>
      <h2><span className="font-add">Ä</span>ndra karakt<span className="font-add">Ä</span>r</h2>
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

export default EditCharacter;