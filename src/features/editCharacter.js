import { createAction, createReducer } from '@reduxjs/toolkit';

const addToEditForm = createAction('character to edit form');

const actions = { addToEditForm };

const initialState = []


const reducer = createReducer(initialState, {
    [addToEditForm]: (state, action) => {
            return [
                state = action.payload
            ];
        
    },  // addToCart

})




export { actions, reducer }