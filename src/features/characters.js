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
    name: "Glenn Den 10:e",
    world: "Hufvudstaden",
    backstory:
      "Världens konung, ättling till ”Glenn den store”, härskare över de fyra världarna. Korpulent figur med hjärta av guld men vett som ingen vill bli förknippad med.",
    strength: 5,
    intelligence: 3,
  },
  {
    id: 2,
    name: "Alf Ensamseglaren",
    world: "Donsö",
    backstory:
      "Donsöfödd, vi är inte undersåtar, vi är inte slavar. Vi plogar inte fält eller sliter i gruvor. Vi tar vad som är vårt, skärgård som fastland.",
    strength: 3,
    intelligence: 7,
  },
  {
    id: 3,
    name: "Mördar Berra",
    world: "Hisingen",
    backstory:
      "Född och uppvuxen från de mörkaste av platser denna värld skådat. Har en historia få skulle klara av att ta in. ”Easy monkeyboy!",
    strength: 8,
    intelligence: 6,
  },
  {
    id: 4,
    name: "Alva Alv",
    world: "Slottsskogen",
    backstory:
      "I gryningstiden av världen, innan människans ankomst och uppförandet av slott och städer, fanns det bara skogens folk.",
    strength: 3,
    intelligence: 9,
  },
  {
    id: 5,
    name: "Gomba",
    world: "Hisingen",
    backstory:
      "När natten nalkas vaknar Gomba, detta satans väsen. Hans ursinne och kraft är utan motstycke.",
    strength: 10,
    intelligence: 2,
  },
  {
    id: 6,
    name: "Bror Köpman",
    world: "Hufvudstaden",
    backstory:
      "När mjölet sinar i byn väger Bror Köpman pengapungen i sin hand.",
    strength: 2,
    intelligence: 8,
  },
  {
    id: 7,
    name: "Blodia ",
    world: "Hufvudstaden",
    backstory:
      "När trollpackan Blodia svävar längs Avenyn vänder både Gomba och Bror Köpman på huvudet.",
    strength: 4,
    intelligence: 7,
  },
  {
    id: 8,
    name: "Hånns Dönarn",
    world: "Donsö",
    backstory:
      "Är du inte med på noterna när du träffar Hånns så smäller det, en riktig träskalle med nävar av järn.",
    strength: 9,
    intelligence: 3,
  },
  {
    id: 9,
    name: "Proppen",
    world: "Slottsskogen",
    backstory:
      "Det går rykten om att han uppfunnet elen ute i Slottsskogen. Självgod och tyken som få.",
    strength: 6,
    intelligence: 8,
  },
  {
    id: 10,
    name: "Pöjkvaskern",
    world: "Hufvudstaden",
    backstory:
      "Ställer till med hyss och sattyg. Snabb, otrevlig, liten. Som en råtta förpestar han Huvfudstaden.",
    strength: 1,
    intelligence: 7,
  },
  {
    id: 11,
    name: "Plåstret",
    world: "Donsö",
    backstory:
      "Har han väl fått span på något eller någon blir du inte av med honom. Snabb i sidled.",
    strength: 4,
    intelligence: 5,
  },
  {
    id: 12,
    name: "Gåbben",
    world: "Hisingen",
    backstory:
      "Sitter och ljuger på hammna, inget är sant men underhållande som få. Bra reflexer.",
    strength: 4,
    intelligence: 7,
  },
  {
    id: 13,
    name: "Halta Lötta",
    world: "Slottsskogen",
    backstory:
      "Låt dig inte luras av hennes trasiga yttre, hennes käpp innehar level 10 magic.",
    strength: 7,
    intelligence: 7,
  },
  {
    id: 14,
    name: "Ulla Krabbansikte",
    world: "Donsö",
    backstory:
      "Fiskardotter som bemästrar sjön som ingen annan. Fångar krabbor med munnen.",
    strength: 4,
    intelligence: 7,
  },
  {
    id: 15,
    name: "Beda",
    world: "Donsö",
    backstory:
      "Riktig gammal och rödden, hennes visdom är magic",
    strength: 1,
    intelligence: 9,
  },
  {
    id: 16,
    name: "Ragnar Enstöring",
    world: "Slottsskogen",
    backstory:
      "Trots sitt namn, fruktansvärt social. En levande paradox. Sällskapssjuk.",
    strength: 6,
    intelligence: 6,
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
