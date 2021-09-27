import axios from 'axios';



export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMONSDETAIL = "GET_POKEMONSDETAIL"
export const GET_POKEMONSNAME = "GET_POKEMONSNAME"
export const GET_TYPES ="GET_TYPES"


//--------------------Todos los pokemons----------------------//
export function getPokemons(){
    return dispatch =>{
        return axios.get('http://localhost:3001/pokemons/').then(obj =>{
            dispatch({
                type:GET_POKEMONS,
                payload:obj.data
            })
        })
    }
    
} 
//--------------------Pokemons por ID----------------------//
export function getPokemonsDetail(id){
    return dispatch =>{
        return axios.get(`http://localhost:3001/pokemons/${id}`).then(obj =>{
            dispatch({
                type:GET_POKEMONSDETAIL,
                payload:obj.data
            })
        })
    }
    
} 

//--------------------Pokemons por Nombre----------------------//
export function getPokemonName (name){
return dispatch =>{

    return axios.get(`http://localhost:3001/pokemons/?name=${name}`).then(obj =>{
    dispatch({
        type: GET_POKEMONSNAME,
        payload: obj.data
            })
        })
}
}

//----------------------------Tipos-----------------------------//
export function getTypes (){
    return dispatch =>{
        return axios.get(`http://localhost:3001/types`).then(obj =>{
        dispatch({
            type: GET_TYPES,
            payload: obj.data
                })
            })
    }
    }
