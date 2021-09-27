import React from "react";
import "./Models.css"
                      //id","name","image","hp","atack","defense","speed","height","weight"
const DetailNameId= ({ name, types, image, hp, atack, defense, speed, height, weight }) => {
  return (
    <div className="contenedor-detalle">
     <div className="img-detalle">
     <figure>
        <img className="img-PokemonDetail"src={image} alt="" />
      </figure>
      </div>
      <div>
    <ul className="ul-Detalle">
    <li><h2>{name}</h2></li>
    <li>Atack: {atack}</li>
    <li>Defence: {defense}</li>
    <li>Speed: {speed}</li>
    <li>Hp: {hp}</li>
    <li>Height: {height}</li>
    <li>Weight: {weight}</li>
    <li>Type: {types+" "}</li>
    </ul>
    </div>
    </div>
  );
};
export default DetailNameId;