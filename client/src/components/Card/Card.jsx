import React from "react";
import "./Card.css";

const Card = ({ name, types, image }) => {
  return (
    <div className="contenedor">
      <figure>
        <img src={image} alt="" />
      </figure>
      <h1>{name}</h1>
      <p>{types} </p>
     
    </div>
  );
};
export default Card;