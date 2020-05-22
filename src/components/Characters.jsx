import React, { useState } from 'react';
import AddCharacter from '../components/AddCharacter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { actions } from '../features/characters'
import '../popup.css';


const Characters = () => {
    const dispatch = useDispatch();
    const charactersData = useSelector(state => state.characters)
    const [showAdd, setShowAdd] = useState(false);
    
    let maybeAdd = null;
    if( showAdd ) {
        maybeAdd = <AddCharacter setShowAddChild={setShowAdd}/> ;
    }

    
const SearchBar = (
  <div  className='SearchBar' style={{ marginBottom: '30px' }}>
    <input
      type='text'
      placeholder='Sök efter karaktärer ...'
      name='sök karktärer'
      ></input>
    </div>
  )

    const outputCharacters = charactersData.map(charItem => (
        <div className="planets-item" key={charItem.character.name}>
            <div> NAME: {charItem.character.name} </div>
            <div> WORLD {charItem.character.world} </div>
            <div> STRENGHT: {charItem.strength} </div>
            <button  onClick={() => dispatch(actions.removeCharacter(charItem.character.name))}>Ta bort</button>
        </div>
    ))
    return (
        <div className="border">
            
            {SearchBar}
            <div className="container">
            <div className="persons">{outputCharacters}</div>
            </div>
            <button onClick={() => setShowAdd(!showAdd)}>Toggle</button>
            {maybeAdd}
            
        </div>
    )
}

export default Characters;