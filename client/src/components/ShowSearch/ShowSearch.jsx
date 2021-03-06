import React from 'react'
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";


function ShowSearch() {

    const poke = useSelector((state)=> state.pokemonsName);

    return (
        <div>
        {
            <Link className="Link" to={`/pokeDetail/${poke.id}`}>
             <Card
             key={poke.id}
             image={poke.image}
             name={poke.name}
             types={poke.types}
             atack={poke.atack}
             defence={poke.defence}
             />
            </Link>
           
        }
        </div>
        )
}

export default ShowSearch;
