import axios from 'axios';



export const GET_POKEMONS = "GET_POKEMONS"

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

