import { createAction, createReducer } from '@reduxjs/toolkit'

const increase = createAction('increase') 
const decrease = createAction('decrease')

const actions = { increase, decrease };

const initialState = 10;

const reducer = createReducer(initialState, {
    [increase]: (state, action) => state + 1,
    [decrease]: (state, action) => state -1
})


export { actions, reducer }