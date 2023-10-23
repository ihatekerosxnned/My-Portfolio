import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () =>{
    return(
        <>
        <nav>
            <h1>FBuenaflor</h1>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;