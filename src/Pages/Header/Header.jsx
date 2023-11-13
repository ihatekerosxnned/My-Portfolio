import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import { animate, stagger, spring } from "motion";

const Header = () => {
  useEffect(() => {
    animate(
      ".a",
      { y : ["-800px", 0], opacity:[0, 1]},
      { delay: stagger(0.2),easing:spring()}
    );
  }, []);

  return (
    <section className={styles.headersection}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className="a">Port</h1>
          <h1 className="a">Foli<span className="o">o</span></h1>
          <h2 className="a">Welcome to the world of Racism</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
