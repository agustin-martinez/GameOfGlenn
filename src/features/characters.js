import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCharacters = createAction('add character to list');
const removeCharacter = createAction('remove from characters');
const increaseStrength = createAction('increase Strenth')
const decreaseStrength = createAction('decrease Strenth')

// const alredyAdded = createAction('if alredy added');

const actions = { addToCharacters, removeCharacter, increaseStrength, decreaseStrength };

const initialState = [
     { character: {name: 'Ragnhild', world: 'Hono'},
     strength: 8},
     { character: {name: 'd', world: 'Hono'},
     strength: 5},
     { character: {name: 's', world: 'Hono'},
     strength: 3},
     { character: {name: 'fe', world: 'Hono'},
     strength: 4}
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
                { character: action.payload, strenght: 1 }
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