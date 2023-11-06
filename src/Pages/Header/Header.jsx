import React, {useEffect} from "react";
import styles from "./Header.module.css";

import headerimg from "../../assets/Images/Header.png";

import {animate } from "motion";
import Type from "./Type";
import ParticlesBG from "../../Components/Particles/ParticlesBg";

const Header = () => {
  useEffect(()=>{
    animate(
      "#headerbanner",
      { scale:[0, 1], opacity:[0, 1], transform:"none" },
      {
        delay:4,
        duration: 3,
        offset: [0, 1],
        easing: ["ease-in-out"]
      }
    ),
    animate(
      "#first",
      {opacity:[0, 1], y:[100, 0]},
      {
        delay:3.3,duration: 1, easing: [.22, .03, .26, 1]
      }
    ),
    animate(
      "#second",
      {opacity:[0, 1], y:[100, 0]},
      {
        delay:3.5,duration: 1.3, easing: [.22, .03, .26, 1]
      }
    ),
    animate(
      "#third",
      {opacity:[0, 1], y:[100, 0]},
      {
        delay:3.7,duration: 1, easing: [.22, .03, .26, 1]
      }
    ),
    animate(
      "#headerbutton",
      {opacity:[0, 1], y:[100, 0],transform:"none"},
      {
        delay:4,duration: 0.7,easing: [.22, .03, .26, 1]
      }
    )
  })
  return (
    <>
      <section>
      <ParticlesBG />
        <div className={styles.container}>
          <div className={styles.content}>
            <h4 id="first">Explore My World of Code and Creativity</h4>
            <h1 id="second">
              <span><Type /></span>
            </h1>
            <span className={styles.blur} />
            <p id="third">
              
              Discover my projects, delve into my coding journey, and witness
              the fusion of technology and creativity. Welcome to my digital
              playground!
            </p>
            <button className="btn" id="headerbutton">Read More</button>
          </div>
          <div className={styles.image} id="headerbanner">
            <img src={headerimg} alt="" />
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Header;
