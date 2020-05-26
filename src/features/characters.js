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
    pic: hufvudstaden,
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 6,
    intelligence: 5,
  },
  {
    id: 2,
    name: "BO",
    world: "Slottskogen",
    pic: slotts,
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 4,
    intelligence: 4,
  },
  {
    id: 3,
    name: "LARS",
    world: "Donsö",
    pic: donsö,
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 3,
    intelligence: 6,
  },
  {
    id: 4,
    name: "KARL",
    world: "Hisingen",
    pic: hisingen,
    backstory:
      "Gandalf är enbart hobernas och nordmännens namn på honom. Alverna känner honom som Mithrandir Grå vandrare och även männen av Gondor. ",
    strength: 5,
    intelligence: 7,
  },
];

const reducer = createReducer(initialState, {
  [addToCharacters]: (state, action) => {
    return [...state, action.payload];
  }, // addToCart

  [removeCharacter]: (state, action) =>
    state.filter((character) => character.id !== action.payload),

  [editCharacter]: (state, action) =>
    state.map((character, index) => {
      if (character.id === action.payload.id) {
        return action.payload;
      } else {
        return character;
      }
      // Alternativ: return (character.id === action.payload.id) ? action.payload : character
    }),
});

// [editCharacter]: (state, action) => {
//   return state.map((item, index) => {
//   // Hitta item med matchande id
//   if(item.character.id === action.payload.character.id) {
//     // Return a new object Returnera ett nytt
//     return {
//       character: action.payload  // replace the email addr
//     }
//   }
//   // Leave every other item unchanged
//   return item;
// });
// },

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

export { actions, reducer };
