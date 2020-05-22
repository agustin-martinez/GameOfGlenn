import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { actions } from '../features/characters'
import '../form.css';
import '../popup.css';



const AddCharacter = ({setShowAddChild}) => {
const dispatch = useDispatch();
//--------------------------------------------------------Persons
const [valueName, setValueName] = useState([]);
const [valueHomeworld, setValueHomeworld] = useState('');
const [valueStrength, setValueStrength] = useState([]);
const [character, setCharacter] = useState({mess: 'Ingen karaktär inlagd ännu'})

const [touchedStrength, setTouchedStrength] = useState(false);
const [touchedHomeWorld, setTouchedHomeWorld] = useState(false);
const [touchedName, setTouchedName] = useState(false);

//fav
const handleChangeFormName = event => {
  setValueName(event.target.value);
};
const handleChangeFormHomeworld = event => {
  setValueHomeworld(event.target.value);
};
const handleChangeFormStrength = event => {
  setValueStrength(event.target.value);
};
//-----------------------------------------------


//----------------------------------Validation Person

let btnDisable = true;
let btnDisableName = true;
let btnDisableHomeworld = true;
let btnDisableiBrthyear = true;

const isValidLength = l => {
    if  (l.length < 2 || l.length > 20) 
    return false;
    else 
    return true;
  }

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

const isValidNumber = x => {
  let maybeNumber = Number(x);
  if (x.length < 1 || x.length > 3) 
  return false;
  return !isNaN(maybeNumber)

}
let cssClassStrength = '';
if( touchedStrength ) {
  if( isValidNumber(valueStrength) )
    cssClassStrength = 'valid';
  else
    cssClassStrength = 'invalid'
}

if( isValidNumber(valueStrength) ) {
cssClassStrength = 'valid';
}


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


if( isValidNumber(valueStrength) ) {
btnDisableiBrthyear = false;
} else {
btnDisableiBrthyear = true;
}


if (touchedName && touchedHomeWorld &&
  !btnDisableName && !btnDisableHomeworld && !btnDisableiBrthyear ) {
    btnDisable = false;
} 


let nameValMess = '';
if( touchedName ) {
  if( isValidLength(valueName) )
  nameValMess = ''
  else
  nameValMess = 'Please add at least 3 characters and max 20'
}

let homeWorldValMess = '';
if( touchedHomeWorld ) {
  if( isValidLength(valueHomeworld) )
  homeWorldValMess = ''
  else
  homeWorldValMess = 'Please chose a world'
}

let strengthValMess = '';
if( touchedStrength ) {
  if( isValidNumber(valueStrength) )
    strengthValMess = ''
  else
    strengthValMess = 'Please add(only numbers) atleast 1 digit and max 3'
}

  function clearFormsPerson() {
    setValueName('');
    setValueHomeworld('');
    setValueStrength('');
    setTouchedStrength(false)
    setTouchedHomeWorld(false);
    setTouchedName(false);
  }

  const handleSubmit = event => {
  if (valueName && valueHomeworld && valueStrength) {
    dispatch(actions.addToCharacters({name: valueName, world: valueHomeworld}))
    setCharacter({name: valueName, mess: ' added to the world ', world: valueHomeworld});
  }

  clearFormsPerson()

  event.preventDefault();
};


const charactersForm = (
  <div>
    <form className="flexRowShow" onSubmit={handleSubmit} id="test">
    
      <span className="space-for-val">{nameValMess}</span>
      <input type="text" className={cssClassName} value={valueName} placeholder="Input Name"
      onChange={handleChangeFormName} onBlur={event => setTouchedName(true)} />

      <span className="space-for-val">{homeWorldValMess}</span>
      <select value={valueHomeworld} onChange={handleChangeFormHomeworld} onBlur={event => setTouchedHomeWorld(true)}
      className={cssClassHomeworld}>

        <option value="" disabled hidden>Please Choose...</option>
        <option value={'Hufvudstaden'}>Hufvudstaden</option>
        <option value={'Donsö'}>Donsö</option>
        <option value={'Honö'}>Honö</option>
        <option value={'Hisingen'}>Hisingen</option>
        </select>

      <span className="space-for-val">{strengthValMess}</span>
      <input type="text" id="s" className={cssClassStrength} value={valueStrength} placeholder="Input Strength"
      onChange={handleChangeFormStrength} onBlur={event => setTouchedStrength(true)} />
        
      <button className="btn-add" disabled={btnDisable} type="submit">ADD PERSON</button>
    </form>
  </div>
)

return (
<div id="myModal" className="add-popup">
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