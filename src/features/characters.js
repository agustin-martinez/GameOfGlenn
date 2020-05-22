import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCharacters = createAction('add character to list');
const removeCharacter = createAction('remove from characters');
const increaseStrength = createAction('increase Strenth')
const decreaseStrength = createAction('decrease Strenth')

// const alredyAdded = createAction('if alredy added');

const actions = { addToCharacters, removeCharacter, increaseStrength, decreaseStrength };

const initialState = [
     { character: {name: 'Ragnhild', world: 'Hono', backstory: 'fdffd', strength: 6, intelligence: 5 }},
     { character: {name: 'd', world: 'Hono'}},
     { character: {name: 's', world: 'Hono'}},
     { character: {name: 'fe', world: 'Hono'}}
]

// const reducer = createReducer(initialState, {
//     [addToCharacters]: (state, action) => [
//         ...state,
//         { character: action.payload, strenght: 1 }
//     ]
// }
// )

const reducer = createReducer(initialState, {
    [addToCharacters]: (state, action) => {
            return [
                ...state,
                { character: action.payload}
            ];
        
    },  // addToCart

    [removeCharacter]: (state, action) => (
        state.filter(cartItem => cartItem.character.name !== action.payload)
    )
})

// function alreadyAdded () {
    
// }

// const reducer = createReducer(initialState, {
//     [addToCharacters]: (state, action) => {
//         let found = state.find(characterItem => characterItem.character.name === 
//         action.payload.name);
//         if(found) {
//             alreadyAdded(action.payload.name)
//             console.log('already added')
//         } else {
//             return [
//                 ...state, { character: action.payload, strenght: 1 }
//             ];
//         }
//     }
// })





export { actions, reducer }