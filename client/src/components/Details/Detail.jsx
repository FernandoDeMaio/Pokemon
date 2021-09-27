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
      <div className="">

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
        
      </div>
    );
  };
  export default Detail;
  