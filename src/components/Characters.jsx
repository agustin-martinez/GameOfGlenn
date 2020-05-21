import React, { useState } from 'react';
import AddCharacter from '../components/AddCharacter';
import { useSelector } from 'react-redux';

// const charactersData = [
//     { name: 'Ragnhild', world: 'Hono', strength: 8},
//     { name: 'Botlof', world: 'Slottskogen', strength: 9},
//     { name: 'Garnienka', world: 'Donso', strength: 6},
//     { name: 'Gomba', world: 'Slottskogen', strength: 10}
// ]



const Characters = () => {
    const charactersData = useSelector(state => state.characters)

    
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
        <div className="persons-item" key={charItem.character.name}>
            <div> NAME: {charItem.character.name} </div>
            <div> WORLD {charItem.character.world} </div>
            <div> STRENGHT: {charItem.strength} </div>
            {/* <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button> */}
        </div>
    ))
    return (
        <div>
            {SearchBar}
            <div className="persons">{outputCharacters}</div>
            <AddCharacter />
        </div>
    )
}

export default Characters;