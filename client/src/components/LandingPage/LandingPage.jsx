import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

const LandingPage = () =>{
    
    return (
    
        <div className="Landing">
          <Link to={`/home`}>
        <button className= "searchButton"></button>
       </Link>
        </div>
    )
    }

export default LandingPage;