import React from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../actions";


const SearchBar = ({name, setName})=> {
    const dispatch= useDispatch();
     
        
            function OnChange(e){
               
                setName(e.target.value);
                
            }
    
            function OnSubmit(e){
              
                e.preventDefault();
             dispatch(getPokemonName(name));
            }
        
    return <div>
        
        <input  className="input-SB"onChange={OnChange} placeholder="   Busca tu Pókemon!!"></input>
        <button className= "btn-busqueda" onClick={OnSubmit}>Buscar</button>
           
        </div>
    }
    export default SearchBar;