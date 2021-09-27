import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../actions"


const Forms = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes())
  },[]);

  const tipo = useSelector((state) => state.tipos);
  const [tipos, setTipos] = useState([]);
  const [pokemon, setPokemons] = useState({
    name: "",
    image:"",
    hp: "",
    atack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: tipos
  });
//"id","name","image","hp","atack","defense","speed","height","weight"
  function onInputChange(e) {
    setPokemons((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  function onInputTypes({ target }) {
    setTipos([...tipos, target.value]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/pokemons/", pokemon);
    alert(`Atrapaste un ${pokemon.name}!!!`);
    
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={pokemon.name}
          onChange={onInputChange}
        />

        <label>Hp</label>
        <input
          type="text"
          name="hp"
          value={pokemon.hp}
          onChange={onInputChange}
        />

        <label>Weight</label>
        <input
          type="text"
          name="weight"
          value={pokemon.weight}
          onChange={onInputChange}
        />

          <label>Atack</label>
        <input
          type="text"
          name="atack"
          value={pokemon.atack}
          onChange={onInputChange}
        />

             <label>Defence</label>
        <input
          type="text"
          name="defence"
          value={pokemon.defence}
          onChange={onInputChange}
        />

             <label>Speed</label>
        <input
          type="text"
          name="speed"
          value={pokemon.speed}
          onChange={onInputChange}
        />

        <label>Height</label>
        <input
          type="text"
          name="height"
          value={pokemon.height}
          onChange={onInputChange}
        />

        <label>image</label>
        <input
          type="text"
          name="image"
          value={pokemon.image}
          onChange={onInputChange}
        />

        <label>Type</label>
        <select name="tipo" onChange={onInputTypes}>
          {tipo.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>

        <input type="submit" />
      </form>
{tipos.map(el => {
 return( <span>{el}</span>)

})


}

    </section>
  );
};

export default Forms;

