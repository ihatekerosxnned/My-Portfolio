import React, { useEffect } from "react";
import { inView, animate } from "motion";
import styles from "./Homepage.module.css";
import Header from "../Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Homepage = () =>{
    useEffect(()=>{
        // Animation from left side
        inView("section",({target})=>{
            animate(
                target.querySelector("#left"),
        {
            x:[-200, 0],opacity:[0, 1], transform: "none",
        },
        {
            delay: 2, duration: 4, easing: [0.17, 0.55, 0.55, 1]
        })
        }),
        // Animation from right side
        inView("section",({target})=>{
            animate(
                target.querySelector("#right"),
        {
            x: [1000, 0], opacity: [0, 1]
        },
        {
            delay: 2, duration: 4, easing: [0.17, 0.55, 0.55, 1]
        })
        }),
        // Animation from bottom
        inView("section",({target})=>{
            animate(
                target.querySelector("#bottom"),
        {
            y:[500, 100, 0],opacity:[0, 1], transform: "none",
        },
        {
            delay: 2, duration: 4, easing: [0.17, 0.55, 0.55, 1]
        })
        })
    },[])
    return(
        <>
        <Navbar />
        <Header />
        <section>
        <div className={styles.all_container} id="left">
          <h2>About</h2>
          <p>
            I'm a dedicated IT student with a passion for innovation and
            problem-solving. I thrive in the ever-changing world of technology,
            where I believe the key to shaping the future resides. In my
            journey, I've honed skills in web development, database management,
            and system architecture. Welcome to my digital world, where I
            combine these skills to create innovative solutions and drive
            progress in the tech landscape.
          </p>
          <div className={styles.skills_container}></div>
        </div>
      </section>
      {/* EXPERIENCE */}
      <section>
      <div className={styles.all_container} id="right">
        <h2>Experience</h2>
        <p>
        With hands-on experience gained through cybersecurity competitions and a versatile skill set encompassing React, Angular, PHP, HTML, CSS, and JavaScript, I'm ready to tackle the challenges of the digital world.
        </p>
      </div>
      </section>
      {/* PROJECTS */}
      <section>
        <div className={styles.all_container} id="left">
          <h2>Projects</h2>
          <div className={styles.card_container}>
            <div className={styles.card}>s</div>
            <div className={styles.card}>s</div>
            <div className={styles.card}>s</div>
            <div className={styles.card}>s</div>
          </div>
        </div>
      </section>
      {/* CONTACT FORM */}
      <section>
        <div className={styles.all_container} id="bottom">
          <h2>Contact Me</h2>
          <form action="" className={styles.form_group}>
            <div className={styles.form_group_flex}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className={styles.btn_form}>Submit</button>
          </form>
        </div>
      </section>
      <Footer />
        </>
    );
}

export default Homepage; 