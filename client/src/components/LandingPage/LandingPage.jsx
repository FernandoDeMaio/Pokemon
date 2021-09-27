import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

const LandingPage = () =>{
    
    return (
    
        <div key="botonLanding" className="Landing">
          <Link to={`/home`}>
        <button className= "searchButton">Inicio</button>
       </Link>
        </div>
    )
    }

export default LandingPage;