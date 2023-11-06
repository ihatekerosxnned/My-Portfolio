import React, { useEffect } from "react";
import styles from "./Projects.module.css";

import { animate, inView } from "motion";

import card1 from "../../assets/Images/Cards/Card1.png";

const Projects = () => {
  useEffect(() => {
    inView("#about", ({ target }) => {
      animate(
        target.querySelector("#second"),
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.7, duration: 1, easing: [0.22, 0.03, 0.26, 1] }
      ),
        animate(
          target.querySelector("#third"),
          { opacity: [0, 1], y: [50, 0] },
          { delay: 1, duration: 1, easing: [0.22, 0.5, 0.02, 1] }
        ),
        animate(
          target.querySelector("#projects"),
          { opacity: [0, 1], y: [250, 0] },
          { delay: 1.5, duration: 1.7, easing: [0.22, 0.5, 0.02, 1] }
        );
    });
  }, []);
  return (
    <section>
      <div className={styles.container} id="about">
        <div className={styles.content}>
          <h1 id="second">My Projects</h1>
          <p id="third">
            Sample works Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Hic, dolore at esse iure necessitatibus cumque?
          </p>
        </div>
        <div>
          <div className={styles.project_container} id="left">
            <div className={styles.project_image}>
              <img src={card1} alt="" />
            </div>
            <div className={styles.project_text}>
              <h1>Artisan Threads</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloremque, numquam cupiditate tenetur cumque totam
                iste quas voluptas ad inventore mollitia explicabo deserunt eum
                sequi expedita illo similique soluta neque!
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>

          <div className={styles.project_container} id="left">
            <div className={styles.project_image}>
              <img src={card1} alt="" />
            </div>
            <div className={styles.project_text}>
              <h1>Artisan Threads</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloremque, numquam cupiditate tenetur cumque totam
                iste quas voluptas ad inventore mollitia explicabo deserunt eum
                sequi expedita illo similique soluta neque!
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>

          <div className={styles.project_container} id="left">
            <div className={styles.project_image}>
              <img src={card1} alt="" />
            </div>
            <div className={styles.project_text}>
              <h1>Artisan Threads</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus doloremque, numquam cupiditate tenetur cumque totam
                iste quas voluptas ad inventore mollitia explicabo deserunt eum
                sequi expedita illo similique soluta neque!
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.blur} />
    </section>
  );
};

export default Projects;
