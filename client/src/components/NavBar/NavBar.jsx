import React from "react";
import './NavBar.css';
import pokePNG from "../../complements/images/pokemon-titulo.png";
import { Link } from "react-router-dom";


const Navbar = ()=> {
    
return <nav className="">
    <figure>
    <Link className="Link" to={`/home`}> 
    <img className="" src={pokePNG} alt="" />
    </Link>
    </figure>
    <Link className="Link" to={`/Forms`}> 
    <button className= "searchButton">Agregar</button>
    </Link>
    <button className= "searchButton">About</button>
    </nav>
}
export default Navbar;