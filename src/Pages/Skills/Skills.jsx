import React, { useEffect } from "react";
import styles from "./Skills.module.css";

import { animate, inView, stagger } from "motion";

const Skills = () => {
  useEffect(() => {
    inView("section", ({ target }) => {
      animate(
        target.querySelector(".skillsTitle1"),
        { x: ["-50px", 0], opacity: [0, 1] },
        { duration: 0.3, delay: 0.3, easing: "ease-in" }
      ),
        animate(
          target.querySelector(".skillsTitle2"),
          { y: ["-50px", 0], opacity: [0, 1] },
          { duration: 0.3, delay: 0.3, easing: "ease-in" }
        ),
        animate(
          target.querySelector(".skillsTitle3"),
          { x: ["50px", 0], opacity: [0, 1] },
          { duration: 0.3, delay: 0.3, easing: "ease-in" }
        )
        ,
        animate(
          target.querySelector(".links"),
          { y: ["250px", 0], opacity: [0, 1] },
          { duration: 1, delay: 0.3, easing: "ease-in" }
        );
    });
  }, []);
  return (
    <section className={styles.skillsection}>
      <div className={styles.text}>
        <h2 className="skillsTitle1">SKILLS</h2>
        <h2 className="skillsTitle2">SKILLS</h2>
        <h2 className="skillsTitle3">SKILLS</h2>
      </div>
      <div className={`links ${styles.container}`}>
        <a>Css. </a>
        <a>React. </a>
        <a>Angular. </a>
        <a>Php. </a>
        <a>Javascript. </a>
        <a>3D Modeling. </a>
        <a>UI/UX Design.</a>
        <a>Sisig. </a>
        <a>Bopis. </a>
        <a>Cold Brew. </a>
        <a> Html. </a>
        <a>IMY. </a>
        <a>Hihi. </a>
        <a>Balik. </a>
        <a>Kana. </a>
        <a>Java. </a>
        <a>C++. </a>
        <a>C#. </a>
        <a>ChatGPT. </a>
        <a>Thank. </a>
        <a>You. </a>
        <a>UI Animation. </a>
        <a>Web Development. </a>
        <a>Sound Board. </a>
        <a>Angular. </a>
        <a>Php. </a>
        <a>Javascript. </a>
        <a>3D Modeling. </a>
        <a>UI/UX Design. </a>
        <a>Sisig. </a>
        <a>Bopis. </a>
        <a>Cold Brew. </a>
        <a> Html. </a>
        <a>IMY. </a>
        <a>Hihi. </a>
        <a>Balik. </a>
        <a>Kana. </a>
        <a>Java. </a>
        <a>C++. </a>
      </div>
    </section>
  );
};

export default Skills;
