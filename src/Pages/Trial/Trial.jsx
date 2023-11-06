import React, { useEffect, useRef } from "react";
import "./Trial.css";
import { animate, scroll, inView } from "motion";

import img1 from "../../assets/Images/Experience/img1.png";
import img2 from "../../assets/Images/Experience/img2.png";
import img3 from "../../assets/Images/Experience/img3.png";
import img4 from "../../assets/Images/Experience/img4.png";

const Trial = () => {
  const ulRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll animate ni for horizontal scrolling
    if (ulRef.current && sectionRef.current) {
      const items = ulRef.current.children;
      scroll(
        animate(ulRef.current, {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        }),
        { target: sectionRef.current }
      );
    }

    inView(".container", ({ target }) => {
      animate(
        target.querySelector("#project_title"),
        { opacity: [0, 1], y: ["100px", 0] },
        { delay: 0.3, duration: 1, easing: [0.22, 0.03, 0.26, 1] }
      ),
        animate(
          target.querySelector("#project_description"),
          { opacity: [0, 1], y: ["100px", 0] },
          { delay: 0.5, duration: 1, easing: [0.22, 0.03, 0.26, 1] }
        );
    });

    inView(".content", ({ target }) => {
      animate(
        target.querySelector(".card"),
        { opacity: [0, 1], y: ["250px", 0] },
        { delay: 0.5, duration: 1, easing: [0.22, 0.03, 0.26, 1] }
      ),
        animate(
          target.querySelector("#card_title"),
          { opacity: [0, 1], y: ["250px", 0] },
          { delay: 1.3, duration: 1, easing: [0.22, 0.03, 0.26, 1] }
        );
    });
  }, []);
  return (
    <article>
      <header className="container">
        <h1 id="project_title">Gallery</h1>
        <p id="project_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quas.
          Eveniet culpa eum voluptates doloribus.
        </p>
      </header>
      <section ref={sectionRef} className="portfolio">
        <ul ref={ulRef} className="ul_list">
          <li className="content">
            <h1 id="project_title">Just Keep Swimming</h1>
            <p id="project_description">
              Mga Certificates ko Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt itaque impedit explicabo, ullam minima
              repudiandae non quis ratione aliquam quasi optio sequi ex
              voluptatum facere!
            </p>
          </li>
          {/* CARD 1 */}
          <li className="content">
            <div className="card">
              <img src={img3} alt="" />
            </div>
          </li>
          <li className="content">
            <div className="card">
              <img src={img4} alt="" />
            </div>
          </li>

          <li className="content">
            <div className="card">
              <img src={img2} alt="" />
            </div>
          </li>
          <li className="content">
            <div className="card">
              <img src={img1} alt="" />
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Trial;
