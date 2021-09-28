import React from "react";
import "./Card.css"

const Card = ({ name, atack, types, image }) => {
  return (

    <div className="card">
      
        <img className="img-card"src={image} alt="" />
     <div className="card-texto">
           <ul className="ul-Card">
    <li>
      <h5 className="h5Card">{name}</h5>
      </li>
    <li>
      <span className="spanCard">Atack: {atack}</span>
    </li>
    <li>
      <span className="spanCard">{types+" "}</span>
    </li>   
           </ul>
      </div>
    </div>
  );
};
export default Card;