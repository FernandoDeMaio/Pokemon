import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () =>{
    
    return (

        <div>
          <Link className="Link" to={`/home`}>
        <button className= "searchButton">Inicio</button>
       </Link>
        </div>
    


    )
    }

export default LandingPage;