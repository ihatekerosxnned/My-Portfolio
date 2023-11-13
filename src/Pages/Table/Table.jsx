import React, {useEffect} from "react";
import styles from "./Table.module.css";

import { inView, animate, stagger, spring } from "motion";

const Table = () => {
  useEffect(() => {
    inView("section", ({ target }) => {
      animate(
        target.querySelector(".wrapperText"),
        { width:[0, "75%"]},
        { delay:0.2, duration:1.3}
      ),
      animate(
        target.querySelector(".tocContent"),
        {opacity:[0, 1], y:["250px", 0]},
        {delay:0.8, duration:0.2, easing:"linear"}
      )
    });
  }, []);
  
  return (
    <section className={styles.headersection} id="toc">
      <div className={`container ${styles.container}`}>
        <div className={`wrapperText ${styles.wrapperText}`}>
          <h1 className="tobText">About</h1>
          <h1 className="tobText">Services</h1>
          <h1 className="tobText">SKills</h1>
          <h1 className="tobText">Projects</h1>
          <h1 className="tobText">Contact</h1>
        </div>
        <div className={styles.wrapperColor}>
        <div className="tocContent">
        <h2 id="trial">Table of Contents</h2>
        <h2 id="trial">Table of Contents</h2>
        <h2 id="trial">Table of Contents</h2>
        <h2 id="trial">Table of Contents</h2>
        <h2 id="trial">Table of Contents</h2>
        <h2 id="trial">Table of Contents</h2>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
