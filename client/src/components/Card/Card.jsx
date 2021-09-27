import React from "react";
import "./Card.css"
const henry = "../../complements/images/henry.jpg"

const Card = ({ name, types, image }) => {
  return (
    <div className="card">
      
      <figure>
        <img className="img-card"src={image} alt="" />
      </figure>
           
      <h5 className="h5Card">{name}</h5>
      <span className="spanCard">{types+" "}</span>
      
    </div>
  );
};
export default Card;