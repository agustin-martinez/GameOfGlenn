import { createAction, createReducer } from '@reduxjs/toolkit'

const increase = createAction('increase') 

const actions = { increase };

const initialState = 17 ;

const reducer = createReducer(initialState, {
    [increase]: (state, action) => state + 1,
})


export { actions, reducer }