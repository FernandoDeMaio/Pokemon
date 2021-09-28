import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Forms.css"


const Forms = () => {


  const tipo = useSelector((state) => state.types);
  const [tipos, setTipos] = useState([]);
  console.log(tipos)
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
console.log(pokemon)
  function onInputChange(e) {
    setPokemons((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  function onInputTypes({ target }) {
  setTipos(pokemon.types.push(target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/pokemons/", pokemon);
    alert(`Atrapaste un ${pokemon.name}!!!`);
    
  }
  
  return (
    <section>
      <form className="Form-Pokemon" onSubmit={handleSubmit}>
        <h1>Cargá tu Pokémon</h1>
        <label>Name</label>
        <input
        className="input-Form"
          type="text"
          name="name"
          value={pokemon.name}
          onChange={onInputChange}
        />

        <label>Hp</label>
        <input
        className="input-Form"
          type="text"
          name="hp"
          value={pokemon.hp}
          onChange={onInputChange}
        />

       
          <label>Atack</label>
        <input
        className="input-Form"
          type="text"
          name="atack"
          value={pokemon.atack}
          onChange={onInputChange}
        />

             <label>Defence</label>
        <input
        className="input-Form"
          type="text"
          name="defence"
          value={pokemon.defence}
          onChange={onInputChange}
        />

             <label>Speed</label>
        <input
        className="input-Form"
          type="text"
          name="speed"
          value={pokemon.speed}
          onChange={onInputChange}
        />

        <label>Height</label>
        <input
        className="input-Form"
          type="text"
          name="height"
          value={pokemon.height}
          onChange={onInputChange}
        />

        <label>Weight</label>
        <input
        className="input-Form"
          type="text"
          name="weight"
          value={pokemon.weight}
          onChange={onInputChange}
        />


        <label>image</label>
        <input
        className="input-Form"
          type="text"
          name="image"
          value={pokemon.image}
          onChange={onInputChange}
        />

        <label>Type</label>
        <select className="btn-busqueda"name="tipo" onChange={onInputTypes}>
          {tipo.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
          <br/>
        <input className="btn-busqueda" type="submit" />
      </form>
{/* {tipo.map(el => {
 return( <span>{el}</span>)

})


} */}

    </section>
  );
};

export default Forms;

