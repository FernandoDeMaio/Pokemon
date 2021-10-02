import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux"; 
import "./Forms.css"
import { Link } from "react-router-dom";

const Forms = () => {


  const tipo = useSelector((state) => state.types);
  const [tipos, setTipos] = useState([]);
  const [error, setError] = useState({
    name:"",
    atack:"",
    image:""
  });
  const [pokemon, setPokemons] = useState({
    name: "",
    image: "",
    hp: "",
    atack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: tipos
  });

  function validate(el){
      if(pokemon[el]===""){
        setError({...error, [el]:`El campo ${el} no puede estar vacio`})
      }else{
        setError({...error, [el]:""})
      }
  }

 
  function onInputChange(e) {
    setPokemons((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.toLowerCase() };
    });
  }
  function onInputTypes({ target }) {
  setTipos(pokemon.types.push(target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post("http://localhost:3001/pokemons/", pokemon);
    alert(`Atrapaste un ${pokemon.name}!!!`);
    
  }


  
  return (
    <section>
      <form className="Form-Pokemon" onSubmit={handleSubmit}>
        <h1>Cargá tu Pokémon</h1>

        <label>Name</label>
        <input id="input1" className={error.name?"danger":"input-Form"} type="text"name="name" value={pokemon.name} onBlur={(e)=> validate(e.target.name)} onChange={onInputChange}/>
        {!error.name?null:<span className="spanAlert">{error.name}</span>}
          <br/>

        <label>Hp</label>
        <input className="input-Form" type="number" name="hp" value={pokemon.hp} onChange={onInputChange}
        />

          <label>Atack</label>
        <input id="input2" className={error.atack?"danger":"input-Form"} type="number" name="atack" value={pokemon.atack} onBlur={(e)=> validate(e.target.name)} onChange={onInputChange}/>
        {!error.atack?null:<span className="spanAlert">{error.atack}</span>}
          <br/>

             <label>Defence</label>
        <input className="input-Form" type="number" name="defence" value={pokemon.defence} onChange={onInputChange}/>

             <label>Speed</label>
        <input className="input-Form" type="number" name="speed" value={pokemon.speed} onChange={onInputChange}/>

        <label>Height</label>
        <input className="input-Form" type="number" name="height" value={pokemon.height} onChange={onInputChange}/>

        <label>Weight</label>
        <input
        className="input-Form" type="number" name="weight" value={pokemon.weight} onChange={onInputChange}
        />

        <label>image</label>
        <input className={error.image?"danger":"input-Form"} type="text" name="image" value={pokemon.image} onBlur={(e)=> validate(e.target.name)} onChange={onInputChange}/>
        {!error.image?null:<span className="spanAlert">{error.image}</span>}
        <br/>

        <label>Type</label>
        <select id="input3" className="btn-busqueda"name="tipo" onChange={onInputTypes}>
          {tipo.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>

        {pokemon.types?.map(el => <span>{el}, </span>)}
          <br/>




        {pokemon.name===""||pokemon.atack===""||pokemon.image===""||pokemon.types.length===0 ? <span className="spanAlert">Carga los datos de tu Pokémon</span>  : <input id="btn-submit" className="btn-busqueda" type="submit" />}
        
        
        
      </form>
     
    </section>
  );
};

export default Forms;

