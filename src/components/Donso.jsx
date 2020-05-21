import React from 'react';
import { useSelector } from 'react-redux';

const Donso = () => {
    const charactersData = useSelector(state => state.characters)


    const outputCharacters = charactersData.map(charItem => (
        <div className="Characters" key={charItem.character.name}>
            <div> NAME: {charItem.character.name} </div>
            <div> WORLD {charItem.character.world} </div>
            <div> STRENGHT: {charItem.strength} </div>
            {/* <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button> */}
        </div>
    ))

    return (
        <div className="border">

        </div>
    )
}

export default Donso;