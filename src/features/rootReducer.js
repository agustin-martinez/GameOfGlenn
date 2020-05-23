import { combineReducers } from 'redux';
import { reducer as idAdderReducer } from './idAdder';
import { reducer as charactersReducer } from './characters';
import { reducer as editCharacterReducer } from './editCharacter';

const rootReducer = combineReducers({
    idAdder: idAdderReducer,
    characters: charactersReducer,
    editCharacter: editCharacterReducer
})

export { rootReducer };