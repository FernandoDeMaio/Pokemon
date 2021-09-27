import {GET_POKEMONS, GET_POKEMONSDETAIL, GET_POKEMONSNAME, GET_TYPES} from "../actions";

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
      default:
     return state 
  }
}

export default reducer;