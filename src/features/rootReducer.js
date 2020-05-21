import { combineReducers } from 'redux';
import { reducer as worldsReducer } from './worlds';
import { reducer as charactersReducer } from './characters';

const rootReducer = combineReducers({
    worlds: worldsReducer,
    characters: charactersReducer 
})

export { rootReducer };