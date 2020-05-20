import React, { useState } from 'react';

const charactersData = [
    { name: 'Ragnhild', world: 'Hono', strength: 8},
    { name: 'Botlof', world: 'Slottskogen', strength: 9},
    { name: 'Garnienka', world: 'Donso', strength: 6},
    { name: 'Gomba', world: 'Slottskogen', strength: 10}
]



const Characters = () => {
    const [charactersList, setcharactersData] = useState(charactersData)

    function deleteCharacter (charDel) {
        setcharactersData(charactersList.filter(x => x !== charDel));
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

    const outputCharacters = charactersList.map(charactersItem => (
        <div className="Characters" key={charactersItem.name}>
            <div> NAME: {charactersItem.name} </div>
            <div> WORLD {charactersItem.world} </div>
            <div> STRENGHT: {charactersItem.strength} </div>
            <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button>
        </div>
    ))
    return (
        <div>
            {SearchBar}
            {outputCharacters}
        </div>
    )
}

export default Characters;