import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import ShowPokemons from "../ShowPokemons/ShowPokemons.jsx";
import ShowSearch from "../ShowSearch/ShowSearch";
import "./Home.css"



const Home = () => {
  
  const [name, setName] = useState("");

    return (
      <div>
        <div>
        <SearchBar name={name} setName={setName} />
        </div>
        <div className="renderizado">
        {
          name === ""?<ShowPokemons/>:<ShowSearch/>
        }   
        </div>  
      </div>
    );
  };
  
  export default Home;