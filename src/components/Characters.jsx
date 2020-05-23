import React, { useState } from 'react';
import AddCharacter from '../components/AddCharacter';
import EditCharacter from '../components/EditCharacter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { actions } from '../features/characters'
import { actions as actionsEdit } from '../features/editCharacter'
import '../popup.css';


const Characters = () => {
    const dispatch = useDispatch();
    const charactersData = useSelector(state => state.characters)
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    
    let maybeAdd = null;
    if( showAdd ) {
        maybeAdd = <AddCharacter setShowAddChild={setShowAdd}/> ;
    }

    let maybeEdit = null;
    if( showEdit ) {
        maybeEdit = <EditCharacter setShowAddChild={setShowEdit}/> ;
    }
    
    const handleEdit = (char) => {
        dispatch(actionsEdit.addToEditForm(char))

        setShowEdit(!showEdit)
        
      };
     
    
    
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
            <div> INTELLIGENCE: {charItem.character.intelligence} </div>
            <div> STRENGHT: {charItem.character.strength} </div>
            <div> BACKSTORY: {charItem.character.backstory} </div>
            <div> BACKSTORY: {charItem.character.id} </div>
            <button  onClick={() => dispatch(actions.removeCharacter(charItem.character.name))}>Ta bort</button>
            <button onClick={() => handleEdit(charItem)}>Edit Character</button>
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
            {maybeEdit}
            
        </div>
    )
}

export default Characters;