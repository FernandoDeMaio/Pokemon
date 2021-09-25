import React from "react";
import style from "../NavBar/NavBar.css"
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../actions";


const SearchBar = ({name, setName})=> {
    const dispatch= useDispatch();
     
        
            function OnChange(e){
                setName(e.target.value);
                
            }
    
            function OnSubmit(e){
                console.log("click");
                e.preventDefault();
             dispatch(getPokemonName(name));
            }
        
    return <div>
        
        <input  onChange={OnChange} placeholder="   Busca tu Pókemon!!"></input>
        <button className= {style.buttonIn} onClick={OnSubmit}>Buscar</button>
           
        </div>
    }
    export default SearchBar;