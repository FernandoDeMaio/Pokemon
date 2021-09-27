import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ShowPokemons.css"
//import Filter from "../Filter/Filter";

const ShowPokemons = ()=>{

 const allPokemons = useSelector((state)=> state.pokemons)
 const allTypes = useSelector((state)=> state.types)
 const [page, setPage] = useState(0)
 const [filtro, setFiltro]= useState("")
 
//--------------filtro--------------//
 function onChange(e){
  setFiltro(e.target.value)
 }
 
function onSubmit(e){
e.preventDefault();

setFiltro("");

}
 
 //------------Paginado--------------//
 const pagination = () =>{
   if(filtro===""){
    if(page===0) {return allPokemons.slice(page, page + 9)
    }  else{
       return allPokemons.slice(page, page +12 )
    }
  
  }else{
    let arregloF = allPokemons.filter(el => el.types.includes(filtro))
    return arregloF.slice(page, page + 9)
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
   
    <select  className= "btn-paginado" onChange={onChange}>{allTypes.map((el) => {
          return <option value={el.name}>{el.name}</option>})}</select>
    <button className="btn-paginado" onClick={onSubmit} >Quitar Filtros</button>
      <button className="btn-paginado" onClick={prevPage} >Anterior</button>
      <button className="btn-paginado" onClick={nextPage}>Siguiente</button>
      </div>
      <div className="cardsPokemons">
    {
        pagination()?.map((poke) => {
            return(
        <Link className="Link" to={`/pokeDetail/${poke.id}`}>
          <Card
            image={poke?.image}
            name={poke?.name}
            types={poke?.types}
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
