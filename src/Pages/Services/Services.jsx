import React, { useEffect } from "react";
import styles from "./Services.module.css";
import { animate, inView } from "motion";

const Services = () => {
  useEffect(() => {
    inView("section",({target})=>{
      animate(
        target.querySelector(".serviceTitle"),
        { opacity:[0, 1] },
        { delay: 0.3, duration:1.3}
      ),
      animate(
        target.querySelector(".first"),
        { y:["550px", 0], x:["-150px", 0] },
        { delay: 0.8, duration:1.3}
      ),
      animate(
        target.querySelector(".last"),
        { y:["550px", 0], x:["150px", 0] },
        { delay: 0.8, duration:1.3}
      ),
      animate(
        target.querySelector(".middle"),
        { y:["550px", 0] },
        { delay: 0.8, duration:1.3}
      )
    })
  }, []);
  return (
    <section className={styles.servicesection}>
      <h1 className="serviceTitle">Services</h1>
      <div className={styles.container}>
        {/* FREE */}
        <div className={`first ${styles.cardWrapper}`}>
          <p>Free</p>
          <div className={styles.cardTitle}>
            <span>$</span>0<span>/mo</span>
          </div>
          <ul className={styles.lists}>
            <hr />
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Unli Kiss</p>
            </li>
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Ika'y na mimiss</p>
            </li>
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Balik kana please</p>
            </li>
          </ul>
        </div>
        {/* GOLD */}
        <div className={`middle ${styles.cardWrapper}`}>
          <p>Gold</p>
          <div className={styles.cardTitle}>
            <span>$</span>25
            <span>/mo</span>
          </div>
          <ul className={styles.lists}>
            <hr className={styles.gold}/>
            <li className={styles.list2}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={styles.list2}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={styles.list2}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={styles.list2}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={styles.list2}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
        {/* SILVER */}
        <div className={`last ${styles.cardWrapper}`}>
          <p>Silver</p>
          <div className={styles.cardTitle}>
            <span>$</span>49
            <span>/mo</span>
          </div>
          <ul className={styles.lists}>
            <hr />
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Trial</p>
            </li>
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li className={styles.list}>
              <span>
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <p>Trial</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
