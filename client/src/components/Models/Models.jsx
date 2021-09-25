import React from "react";
                      //id","name","image","hp","atack","defense","speed","height","weight"
const DetailNameId= ({ name, type, image, hp, atack, defense, speed, height, weight }) => {
  return (
    <div className="contenedor">
      <figure>
        <img src={image} alt="" />
      </figure>
    <ul>
    <li>Name:  {name} </li>
    <li>Atack: {atack}</li>
    <li>Defence: {defense}</li>
    <li>Speed: {speed}</li>
    <li>Hp: {hp}</li>
    <li>Height: {height}</li>
    <li>Weight: {weight}</li>
    <li>Type: {type}</li>
    </ul>
    
    </div>
  );
};
export default DetailNameId;