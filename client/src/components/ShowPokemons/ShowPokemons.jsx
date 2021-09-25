import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const ShowPokemons = ()=>{

 const allPokemons = useSelector((state)=> state.pokemons)
return (
    <div>
    {
        allPokemons?.map((poke) => {
            return(
        <Link className="Link" to={`/pokeDetail/${poke.id}`}>
          <Card
            image={poke?.image}
            name={poke?.name}
            type={poke?.types}
          /> 
        </Link>
            )
        })
    }
    </div>
    )
    
}

export default ShowPokemons;
