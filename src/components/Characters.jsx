import React, { useState, useEffect } from 'react';
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

    //---------------
    const [searchTerm, setSearchTerm] = useState('');
    const [resultList, setResultList] = useState(charactersData);

    useEffect(() => {
        setResultList(charactersData);
    }, [charactersData]);

    const handleChange = (e) => {
        console.log(charactersData);
        setSearchTerm(e.target.value);
        setResultList(
        charactersData.filter((person) => 
        person.name.toLowerCase().includes(e.target.value) ||
        person.name.toUpperCase().includes(e.target.value)
        )
        );
    };
      //-------------------
    
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
        value={searchTerm}
        onChange={handleChange}
        ></input>
    </div>
    )

    const outputCharacters = resultList.map(charItem => (
        <div className="character-item" key={charItem.id}>
            <div> NAMN: {charItem.name} </div>
            <div> VÄRLD: {charItem.world} </div>
            <div> INTELLIGENS</div>
            <input readOnly type="range" max="10" value={charItem.intelligence}></input>
            <div> STYRKA:  </div>
            <input readOnly type="range" max="10" value={charItem.strength}></input>
            <div> BACKSTORY: {charItem.backstory} </div>
            <div> ID: {charItem.id} </div>
            <button  onClick={() => dispatch(actions.removeCharacter(charItem.id))}>Ta bort</button>
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
