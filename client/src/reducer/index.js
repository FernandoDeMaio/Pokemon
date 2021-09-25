import {GET_POKEMONS, GET_POKEMONSDETAIL, GET_POKEMONSNAME} from "../actions";

 const initialState = {
   pokemons:[],
   pokemonsDetail:[],
   pokemonsName:[],
   tipos:[]
  };
 

const reducer = (state = initialState, action) => {
  switch(action.type) {
   case GET_POKEMONS:return {...state, pokemons: action.payload }
   case GET_POKEMONSDETAIL: return {...state, pokemonsDetail: action.payload}
   case GET_POKEMONSNAME: return {...state, pokemonsName: action.payload}
      default:
     return state 
  }
}

export default reducer;