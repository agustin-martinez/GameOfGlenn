import { combineReducers } from 'redux';
import { reducer as worldsReducer } from './worlds';

const rootReducer = combineReducers({
    worlds: worldsReducer
})

export { rootReducer };