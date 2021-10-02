import {GET_POKEMONS, GET_POKEMONSDETAIL, GET_POKEMONSNAME, GET_TYPES, ASCENDING, DESCENDING} from "../actions";

 const initialState = {
   pokemons:[],
   pokemonsDetail:[],
   pokemonsName:[],
   types:[]
  };
 

const reducer = (state = initialState, action) => {
  switch(action.type) {
   case GET_POKEMONS:return {...state, pokemons: action.payload }
   case GET_POKEMONSDETAIL: return {...state, pokemonsDetail: action.payload}
   case GET_POKEMONSNAME: return {...state, pokemonsName: action.payload}
   case GET_TYPES: return {...state, types: action.payload}
   case ASCENDING:
    if (action.payload === "alphabetic") {
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) =>
          [a.name].join().toLowerCase() > [b.name].join().toLowerCase()
            ? 1
            : -1
        ),
      };
    } else {
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) => {
               return a.atack > b.atack ? 1 : -1;
        }),
      };
    }
    case DESCENDING:
      if (action.payload === "alphabetic") {
        return {
          ...state,
          pokemons: [...state.pokemons].sort((a, b) =>
            [a.name].join().toLowerCase() < [b.name].join().toLowerCase()
              ? 1
              : -1
          ),
        };
      } else {
        return {
          ...state,
          pokemons: [...state.pokemons].sort((a, b) => {
                 return a.atack < b.atack ? 1 : -1;
          }),
        };
      }
      default:
     return state 
  }
}

export default reducer;