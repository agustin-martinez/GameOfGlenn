import { createAction, createReducer } from "@reduxjs/toolkit";
import { slotts } from "../components/assets/mini-slottskogen.svg";
import { hufvudstaden } from "../components/assets/mini-slottskogen.svg";
import { donsö } from "../components/assets/mini-slottskogen.svg";
import { hisingen } from "../components/assets/mini-slottskogen.svg";

const addToCharacters = createAction("add character to list");
const removeCharacter = createAction("remove from characters");
const editCharacter = createAction("edit character");
const increaseStrength = createAction("increase Strenth");
const decreaseStrength = createAction("decrease Strenth");

// const alredyAdded = createAction('if alredy added');

const actions = {
  addToCharacters,
  removeCharacter,
  editCharacter,
  increaseStrength,
  decreaseStrength,
};

const initialState = [
  {
    id: 1,
    name: "RAGNHILD",
    world: "Hufvudstaden",
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 6,
    intelligence: 5,
  },
  {
    id: 2,
    name: "BO",
    world: "Slottsskogen",
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 4,
    intelligence: 4,
  },
  {
    id: 3,
    name: "LARS",
    world: "Donsö",
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 3,
    intelligence: 6,
  },
  {
    id: 4,
    name: "KARL",
    world: "Hisingen",
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 5,
    intelligence: 7,
  },
];

const reducer = createReducer(initialState, {
    [addToCharacters]: (state, action) => {
        return [
            ...state,
            action.payload
        ];
    },  // addToCart

    [removeCharacter]: (state, action) =>
    state.filter((character) => character.id !== action.payload),

    [editCharacter]: (state, action) =>
    state.map((character, index) => {
        if (character.id === action.payload.id) {
        return action.payload;
    } else {
        return character
    }

})

// [addToCharacters]: (state, action) => {
//     let found = state.find(character => character.name === action.payload.name);
//     if( found ) {
//         console.log('Readan tillagd')
//     } else {
//             return [
//             ...state,
//             action.payload
//         ]
//     }
// },
    
})

export { actions, reducer };
