import React from "react";
import styles from './NavBar.css';
import pokePNG from "../../complements/images/pokemon-titulo.png";
import { Link } from "react-router-dom";


const Navbar = ()=> {
    
return <nav className={styles.nav}>
    <figure>
    <Link className="Link" to={`/home`}> 
    <img id="logo" src={pokePNG} alt="" />
    </Link>
    </figure>
 
    <button className= "searchButton">Agregar</button>
    <button className= "searchButton">About</button>
    </nav>
}
export default Navbar;