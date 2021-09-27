import React from "react";
import "./Card.css"
const henry = "../../complements/images/henry.jpg"

const Card = ({ name, type, image }) => {
  return (
    <div className="card">
      <figure className="figure">
        <img src={image} alt="" />
      </figure>
      <h5 className="h5Card">{name}</h5>
      <span className="spanCard">{type}</span>
      
    </div>
  );
};
export default Card;