import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { actions } from '../features/characters'

const AddCharacter = () => {
const dispatch = useDispatch();
//--------------------------------------------------------Persons
const [valueName, setValueName] = useState([]);
const [valueHomeworld, setValueHomeworld] = useState([]);
const [valueBirthyear, setValueBirthyear] = useState([]);
const [favourites, setFavourites] = useState([])

const [touchedBirthyear, setTouchedBirthyear] = useState(false);
const [touchedHomeWorld, setTouchedHomeWorld] = useState(false);
const [touchedName, setTouchedName] = useState(false);

//fav
const handleChangeFormName = event => {
  setValueName(event.target.value);
};
const handleChangeFormHomeworld = event => {
  setValueHomeworld(event.target.value);
};
const handleChangeFormBirthyear = event => {
  setValueBirthyear(event.target.value);
};

//----------------------------------Validation Person
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
let cssClassBirthyear = '';
if( touchedBirthyear ) {
  if( isValidNumber(valueBirthyear) )
    cssClassBirthyear = 'valid';
  else
    cssClassBirthyear = 'invalid'
}

if( isValidNumber(valueBirthyear) ) {
cssClassBirthyear = 'valid';
}

let btnDisable = true;
let btnDisableName = true;
let btnDisableHomeworld = true;
let btnDisableiBrthyear = true;

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


if( isValidNumber(valueBirthyear) ) {
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
  homeWorldValMess = 'Please add at least 3 characters and max 20'
}

let birthyearValMess = '';
if( touchedBirthyear ) {
  if( isValidNumber(valueBirthyear) )
    birthyearValMess = ''
  else
    birthyearValMess = 'Please add(only numbers) atleast 1 digit and max 3'
}

  function clearFormsPerson() {
    setValueName('');
    setValueHomeworld('');
    setValueBirthyear('');
    setTouchedBirthyear(false)
    setTouchedHomeWorld(false);
    setTouchedName(false);
  }

  const handleSubmit = event => {
  if (valueName && valueHomeworld && valueBirthyear) {
    dispatch(actions.addToCharacters({name: valueName, world: valueHomeworld}))
    // setFavourites({name: valueName, world: valueHomeworld});
  }

  clearFormsPerson()

  event.preventDefault();
};

//favend
//  useEffect(() => { 
//  dispatch(actions.addToCharacters(favourites))
//  console.log(favourites)
//  }, [favourites]);


const favouriteListAndForm = (
    <div>
        <h3>ADD PERSON</h3>
        {/* {favouritesSections} */}
        <form className="flexRowShow" onSubmit={handleSubmit}>
    
        <span>{nameValMess}</span>
        <input type="text" className={cssClassName} value={valueName} placeholder="Input Name"
        onChange={handleChangeFormName} onBlur={event => setTouchedName(true)} />

        <span>{homeWorldValMess}</span>
        <input type="text" className={cssClassHomeworld} value={valueHomeworld} placeholder="Input Homeworld"
        onChange={handleChangeFormHomeworld} onBlur={event => setTouchedHomeWorld(true)} />

        <span>{birthyearValMess}</span>
        <input type="text" className={cssClassBirthyear} value={valueBirthyear} placeholder="Input Birthyear"
        onChange={handleChangeFormBirthyear} onBlur={event => setTouchedBirthyear(true)} />

    <button className="btn-add" disabled={btnDisable} type="submit">ADD PERSON</button>
    </form>
    <h3 className="line-over">FAVOURITELIST PERSONS</h3>
    {/* <div className="persons">{favouriteList}</div> */}
    </div>
) 

return (
<div>
    {favouriteListAndForm}
</div>
)

}

export default AddCharacter;