import React from "react";
import './NavBar.css';
import pokePNG from "../../complements/images/pokemon-titulo.png";
import { Link } from "react-router-dom";


const Navbar = ()=> {
    
    


return <nav className="barra">
    <figure>
    <Link className="Link-NV" to={`/home`} > 
    <img className="logo" src={pokePNG} alt="" />
    </Link>
    </figure>
    <div className="btn_group">
    <Link  to={`/Forms`}> 
    <button  className= "btn-Nav">Agregar</button>
    </Link>
   
    <Link  to={`/About`}>
    <button  className= "btn-Nav">About</button>
    </Link>
    </div>
    </nav>
}
export default Navbar;