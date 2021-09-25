import React from "react";
import "./Card.css";

const Card = ({ name, type, image }) => {
  return (
    <div className="contenedor">
      <figure>
       
        <img src={image} alt="" />
      </figure>
      <h1>{name}</h1>
      <h1>{type} </h1>
     
    </div>
  );
};
export default Card;