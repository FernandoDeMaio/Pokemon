import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import ShowPokemons from "../ShowPokemons/ShowPokemons.jsx";
import ShowSearch from "../ShowSearch/ShowSearch";

const Home = () => {
   
    
    const [name, setName] = useState("");

    return (
      <div>
        <SearchBar name={name} setName={setName} />
        {
          name ==""?<ShowPokemons/>:<ShowSearch/>
        }     
      </div>
    );
  };
  
  export default Home;