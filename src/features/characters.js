import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCharacters = createAction('add character to list');
const removeCharacter = createAction('remove from characters');
const editCharacter = createAction('edit character');
const increaseStrength = createAction('increase Strenth')
const decreaseStrength = createAction('decrease Strenth')

// const alredyAdded = createAction('if alredy added');

const actions = { addToCharacters, removeCharacter, editCharacter, increaseStrength, decreaseStrength };

const initialState = [
    {id: 1, name: 'Ragnhild', world: 'Hufvudstaden', backstory: 'fdffd', strength: 6, intelligence: 5 },
    {id: 2, name: 'Bo', world: 'Slottskogen', backstory: 'dsd', strength: 4, intelligence: 4 },
    {id: 3, name: 'Lars', world: 'Donsö', backstory: 'vds', strength: 3, intelligence: 6 },
    {id: 4, name: 'Karl', world: 'Hisingen', backstory: 'fdffd', strength: 5, intelligence: 7 }
]


// [addToCharacters]: (state, action) => {
//     return [
//         ...state,
//         action.payload
//     ];

// },  // addToCart

const reducer = createReducer(initialState, {
    [addToCharacters]: (state, action) => {
        let found = state.find(character => character.name === action.payload.name);
        if( found ) {
            console.log('Readan tillagd')
        } else {
                return [
                ...state,
                action.payload
            ]
        }
    },  // addToCart

    [removeCharacter]: (state, action) => (
        state.filter(character => character.id !== action.payload)
    ),

    [editCharacter]: (state, action) => state.map((character, index) => {
    if( character.id === action.payload.id ) {
        return action.payload;
    } else {
        return character
    }

})

    
})





export { actions, reducer }