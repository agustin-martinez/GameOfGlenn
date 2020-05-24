import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCharacters = createAction('add character to list');
const removeCharacter = createAction('remove from characters');
const editCharacter = createAction('edit character');
const increaseStrength = createAction('increase Strenth')
const decreaseStrength = createAction('decrease Strenth')

// const alredyAdded = createAction('if alredy added');

const actions = { addToCharacters, removeCharacter, editCharacter, increaseStrength, decreaseStrength };

const initialState = [
    { character: {id: 1, name: 'Ragnhild', world: 'Hufvudstaden', backstory: 'fdffd', strength: 6, intelligence: 5 }},
    { character: {id: 2, name: 'Bo', world: 'Slottskogen', backstory: 'dsd', strength: 4, intelligence: 4 }},
    { character: {id: 3, name: 'Lars', world: 'Donsö', backstory: 'vds', strength: 3, intelligence: 6 }},
    { character: {id: 4, name: 'Karl', world: 'Hisingen', backstory: 'fdffd', strength: 5, intelligence: 7 }}
]


const reducer = createReducer(initialState, {
    [addToCharacters]: (state, action) => {
            return [
                ...state,
                { character: action.payload}
            ];
        
    },  // addToCart

    [removeCharacter]: (state, action) => (
        state.filter(cartItem => cartItem.character.name !== action.payload)
    ),

    [editCharacter]: (state, action) => {
            return state.map((item, index) => {
            // Hitta item med matchande id
            if(item.character.id === action.payload.character.id) {
              // Return a new object Returnera ett nytt
              return {
                character: action.payload  // replace the email addr
              }
            }
            // Leave every other item unchanged
            return item;
          });
        },

    
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

// [editCharacter]: (state, action) => (
//     state.map((cartItem ,index) => {
//         if( index !== action.index ) {
//             return cartItem
//         } 
//             return {
//             ...cartItem,
//             ...action.cartItem
//         }
//     })
// )





export { actions, reducer }