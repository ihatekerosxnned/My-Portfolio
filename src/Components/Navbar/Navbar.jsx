import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../../assets/images/Vector.png";

const Navbar = () => {
  return (
    <nav>
        <div className={styles.nav_contianer}>
            <div className={styles.nav_logo}>
                <img src={logo} alt="" />
            </div>
            <ul className={styles.nav_links}>
                <li className={styles.links}><a href="#">Home</a></li>
                <li className={styles.links}><a href="#">About</a></li>
                <li className={styles.links}><a href="#">Experience</a></li>
                <li className={styles.links}><a href="#">Projects</a></li>
                <button className='btn'>Hire Me</button>      
            </ul>   
        </div>
    </nav>
  )
}

export default Navbar