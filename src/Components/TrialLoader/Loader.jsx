import React, { useEffect } from "react";
import styles from "./Loader.module.css";

import { animate, stagger} from "motion";

const Loader = () => {
  useEffect(() => {
    animate(
      ".text_items",
      { y: [200, -50, 0], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 1.5,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
    animate(
        ".container_box",
        { height:["100vh", 0], opacityL: [1, 0], width:["100vw", 0] },
        {
          delay: 3,
          duration: 1,
          easing: [0.22, 0.03, 0.26, 1],
        }
      );
      animate(
        ".text_items",
        { opacity: [1, 0] },
        {
          delay: 2.5,
          duration: 1,
          easing: [0.22, 0.03, 0.26, 1],
        }
      );
  }, []);
  return (
    <div className={`container_box ${styles.container}`} id="text_box">
      <div className={styles.text_container}>
        <span className="text_items">Code,</span>
        <span className="text_items">Lu2,</span>
        <span className="text_items">Repeat,</span>
      </div>
    </div>
  );
};

export default Loader;
