import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ShowPokemons.css"
import { orderBy } from "../../actions";


const ShowPokemons = ()=>{

 const allPokemons = useSelector((state)=> state.pokemons)
 const allTypes = useSelector((state)=> state.types)
 const [page, setPage] = useState(0)
 const [filtro, setFiltro]= useState("")
 const [category, setCategory]= useState("alphabetic")
 const [order, setOrder]=useState("ascending")

 const dispatch = useDispatch();


//-------------orden---------------//

function onChangeCategory({target}){
setCategory(target.value);
}
function onChangeOrder({target}){
  setOrder(target.value);
  }

  function onSubmitO(e){

dispatch(orderBy(order, category));

  }
  
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
    if(filtro==="API"){
     let API = allPokemons.filter(el => typeof el.id === "number")
  return API.slice(page, page +9)
    }else if(filtro==="BD"){
      let BD = allPokemons.filter(el => typeof el.id === "string")
      return BD.slice(page, page +9)
     }else{

       let arregloF = allPokemons.filter(el => el.types.includes(filtro))
       return arregloF.slice(page, page + 9)

     }
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
    <button className="btn-paginado" onClick={onSubmit}>Quit Filtro</button>
    
    {/*-----------------APIBD-----------------------  */}
    <select className="btn-paginado" onChange={onChange} >
    <option value="">Todos</option>
    <option value="API">Pokémons</option>
    <option value="BD">Atrapados</option>
    </select>

     {/*-------------------MayorAMenor---------------------  */}
    <select className="btn-paginado" onChange={onChangeCategory}>
      <option value="alphabetic">ABC</option>
      <option value="atack">Ataque</option>
    </select>
    <select className="btn-paginado" onChange={onChangeOrder}>
      <option value="ascending">Ascendente</option>
      <option value="descending">Descending</option>
    </select>
    <button  className= "btn-paginado" onClick={onSubmitO}>Orden</button>
   
   
   {/*-------------------Paginado---------------------  */}
   </div> 
<div className="PaginadoNav">
      <div>
      <button className="btn-paginadoL" onClick={prevPage} >◄</button>
      </div>

      <div>
      <button className="btn-paginadoR" onClick={nextPage}>►</button>
      </div>

      <div className="cardsPokemons">
    {
        pagination()?.map((poke) => {
            return(
        <Link className="Link" to={`/pokeDetail/${poke.id}`}>
          <Card
            image={poke?.image}
            name={poke?.name}
            atack={poke?.atack}
            types={poke?.types}
          /> 
        </Link>
            )
        })
    }
    </div>
    
</div>
    </div>
    )
    
}

export default ShowPokemons;
