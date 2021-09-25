//import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonsDetail } from "../../actions";
import { useParams } from "react-router-dom";
import './Detail.css';
import Models from "../Models/Models";

const Detail = () => {

    const dispatch = useDispatch();
    const pokeDetail = useSelector(state => state.pokemonsDetail)
    const { id } = useParams();
    console.log(pokeDetail)
    useEffect(() => {
        dispatch(getPokemonsDetail(id));
      },[]);
    
    return (
      <div className="contenedor">

        <Models
        image={pokeDetail?.image}
        name={pokeDetail?.name}
        atack={pokeDetail?.atack}
        defense={pokeDetail?.defense}
        hp={pokeDetail?.hp}
        speed={pokeDetail?.speed}
        height={pokeDetail?.height}
        weight={pokeDetail?.weight}
        types={pokeDetail?.types}
        
        />
        {/* <figure><img src={pokeDetail.image} alt="" /></figure>
        <h1>{pokeDetail.name}</h1>
        <p>{pokeDetail.hp}</p>
        {/* <span>{pokeDetail.atack}</span>
        <span>{pokeDetail.defense}</span>
        <span>{pokeDetail.speed}</span>
        <span>{pokeDetail.height}</span>
        <span>{pokeDetail.weight}</span>
        */} 
      </div>
    );
  };
  export default Detail;
  