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
  <div  key="div1">
    <div  key="div2">
     
    <select key="selector1" className="btn-paginado" onChange={onChange}>{allTypes.map((el) => {
          return <option key={el.name} value={el.name}>{el.name}</option>})}</select>
    <button key="boton1" className="btn-paginado" onClick={onSubmit}>Quit Filtro</button>
    
    {/*-----------------APIBD-----------------------  */}
    <select  key="selector2" className="btn-paginado" onChange={onChange} >
    <option key="option1" value="">Todos</option>
    <option key="option2" value="API">Pokémons</option>
    <option key="option3" value="BD">Atrapados</option>
    </select>

     {/*-------------------MayorAMenor---------------------  */}
    <select key="selectMM" className="btn-paginado" onChange={onChangeCategory}>
      <option key="opc1" value="alphabetic">ABC</option>
      <option key="opc2" value="atack">Ataque</option>
    </select>
    <select key="selectAD"className="btn-paginado" onChange={onChangeOrder}>
      <option key="opc3"value="ascending">Ascendente</option>
      <option key="opc4" value="descending">Descending</option>
    </select>
    <button key="boton2" className= "btn-paginado" onClick={onSubmitO}>Orden</button>
   
   
   {/*-------------------Paginado---------------------  */}
   </div> 
<div key="paginado" className="PaginadoNav">
      <div  key="div3">
      <button  key="btn-izq" className="btn-paginadoL" onClick={prevPage} >◄</button>
      </div>

      <div  key="div4">
      <button key="btn-der" className="btn-paginadoR" onClick={nextPage}>►</button>
      </div>

      <div  key="div5" className="cardsPokemons">
    {
        pagination()?.map((poke) => {
            return(
        <Link className="Link" to={`/pokeDetail/${poke.id}`}>
          <Card
            key={poke?.id}
            image={poke?.image}
            name={poke?.name}
            atack={poke?.atack}
            defence={poke?.defence}
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
