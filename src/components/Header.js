import React from "react";
import "../styles/Header.css"
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="nav">
            <h1><Link to="/">Main App</Link></h1>
            <ul id="ul">
                <li><Link to="/About">About</Link></li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


export default Header;