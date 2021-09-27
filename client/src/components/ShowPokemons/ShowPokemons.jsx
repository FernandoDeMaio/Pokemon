import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ShowPokemons.css"
//import Filter from "../Filter/Filter";

const ShowPokemons = ()=>{

 const allPokemons = useSelector((state)=> state.pokemons)
 const [page, setPage] = useState(0)


 //---------deberia venir el filter------------//

// let arregloF=allPokemons.map(el => el.types.includes("grass"))
// console.log("este es" + arregloF)
 
 const pagination = () =>{
   if(page===0) {return allPokemons.slice(page, page + 9)
}  else{
    return allPokemons.slice(page, page +12 )
}
}

const nextPage = ()=>{
  
 if(allPokemons.length > page+12){
   if(page===0){
     setPage(page +9)
  }else{
   setPage(page +12)
  }
 }
}

const prevPage = ()=>{
  if(page > 0){
    if(page===9){
      setPage(page-9)
    }else{
      setPage(page -12)
      }
  }
  
}

return (
  <div>
    <div>

      <button className="btn-primary" onClick={prevPage} >Anterior</button>
      <button className="btn-primary" onClick={nextPage}>Siguiente</button>
      </div>
      <div className="cardsPokemons">
    {
        pagination()?.map((poke) => {
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
    </div>
    )
    
}

export default ShowPokemons;
