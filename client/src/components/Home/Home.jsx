import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";


const Home = () => {
    const pokemon = useSelector((state) => state.pokemons);
    return (
      <div classname="contenedorH">
        <h2>Hola</h2>
        {pokemon?.map((poke) => {
          return (
            <Link className="Link" to={`/pokeDetail/${poke.id}`}>
              <Card
                image={poke?.image}
                name={poke?.name}
                type={poke?.types}
              />
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Home;