import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCharacters = createAction('add character to list');
const removeCharacter = createAction('remove from characters');
const increaseStrength = createAction('increase Strenth')
const decreaseStrength = createAction('decrease Strenth')

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

const reducer = createReducer(initialState, {
    [addToCharacters]: (state, action) => [
        ...state,
        { character: action.payload, strenght: 1 }
    ]
})

export { actions, reducer }