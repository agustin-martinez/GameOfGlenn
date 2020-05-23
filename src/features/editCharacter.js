import { createAction, createReducer } from '@reduxjs/toolkit';

const addToEditForm = createAction('character to edit form');

const actions = { addToEditForm };

const initialState = [
    { character: {id: 1, name: 'Ragnhild', world: 'Hufvudstaden', backstory: 'fdffd', strength: 6, intelligence: 5 }}
]


const reducer = createReducer(initialState, {
    [addToEditForm]: (state, action) => {
            return [
                ...state,
                { character: action.payload}
            ];
        
    },  // addToCart

})




export { actions, reducer }