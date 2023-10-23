import React, {useEffect} from "react";
import styles from "./Header.module.css";
import banner from "../../assets/Images/Banner1.png";

import {animate } from "motion";

const Header = () =>{
    useEffect(()=>{
        animate(
            "#blob",
            { x: [0, -50, 20, 0],y: [0, -50, 20, 0], scale:[.5, 1] },
            {
              duration: 10,
              offset: [0, 0.25, 0.75]
            }
          )
    },[])
    return(
        <>
        <header>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>Felipe Junnie Buenaflor</h1>
            <h2>Explore My World of Code and Creativity</h2>
            <p>
              Discover my projects, delve into my coding journey, and witness
              the fusion of technology and creativity. Welcome to my digital
              playground!
            </p>
            <button className={styles.btn}>See More</button>
          </div>
          <div className={styles.right}>
            <div className={styles.blob} id="blob">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip-path">
                    <path transform="translate(100 100)">
                      <animate
                        attributeName="d"
                        dur="5000ms"
                        repeatCount="indefinite"
                        values="M44.3,-68.9C58.9,-59.5,73.2,-49.7,79.6,-36.2C86,-22.7,84.6,-5.4,82.5,12.2C80.5,29.7,77.9,47.5,68.5,60.6C59.1,73.6,42.8,82,26.5,83.9C10.2,85.8,-6.2,81.2,-22.8,76.8C-39.4,72.3,-56.4,67.9,-67.9,57.3C-79.4,46.7,-85.5,30,-86.7,13.3C-87.8,-3.5,-84.1,-20.1,-76.3,-33.9C-68.5,-47.7,-56.6,-58.6,-43.2,-68.5C-29.8,-78.4,-14.9,-87.3,0,-87.3C14.9,-87.2,29.7,-78.3,44.3,-68.9Z;
          M45.7,-72.5C57.5,-63.5,64.2,-47.9,69.2,-32.8C74.3,-17.7,77.6,-3,76.8,11.9C76,26.8,71,42,62,55.5C53.1,69,40.1,80.8,24.5,87C8.9,93.2,-9.4,93.8,-25,88C-40.6,82.1,-53.4,69.7,-64.6,56.3C-75.9,42.8,-85.5,28.2,-89.3,11.9C-93.2,-4.4,-91.1,-22.5,-82.6,-36.3C-74.1,-50.1,-59.2,-59.4,-44.3,-67.1C-29.5,-74.7,-14.7,-80.6,1.1,-82.3C16.9,-84,33.8,-81.5,45.7,-72.5Z;
          M41.9,-63.1C56.3,-56,71.3,-47.7,78.9,-34.9C86.5,-22.1,86.7,-4.8,84.9,12.7C83.1,30.1,79.2,47.7,69.1,60.3C58.9,73,42.4,80.6,26.2,82C10,83.5,-5.8,78.7,-20.2,72.7C-34.6,66.7,-47.5,59.5,-59.1,49.4C-70.7,39.3,-81.1,26.2,-82.8,12.1C-84.6,-2,-77.7,-17.2,-70.3,-31.5C-62.8,-45.8,-54.8,-59.3,-43,-67.5C-31.1,-75.7,-15.6,-78.7,-0.9,-77.3C13.8,-75.9,27.6,-70.1,41.9,-63.1Z;
          M44.3,-68.9C58.9,-59.5,73.2,-49.7,79.6,-36.2C86,-22.7,84.6,-5.4,82.5,12.2C80.5,29.7,77.9,47.5,68.5,60.6C59.1,73.6,42.8,82,26.5,83.9C10.2,85.8,-6.2,81.2,-22.8,76.8C-39.4,72.3,-56.4,67.9,-67.9,57.3C-79.4,46.7,-85.5,30,-86.7,13.3C-87.8,-3.5,-84.1,-20.1,-76.3,-33.9C-68.5,-47.7,-56.6,-58.6,-43.2,-68.5C-29.8,-78.4,-14.9,-87.3,0,-87.3C14.9,-87.2,29.7,-78.3,44.3,-68.9Z"
                      />
                    </path>
                  </clipPath>
                </defs>
                <image
                  x="0"
                  y="0"
                  width="135%"
                  height="100%"
                  xlinkHref={banner}
                  clipPath="url(#clip-path)"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
        </>
    );
}

export default Header;