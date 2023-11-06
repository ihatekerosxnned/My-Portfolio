import React,{useEffect} from 'react';
import styles from "./Contact.module.css";
import {animate, inView} from "motion";

const Contact = () => {
  useEffect(()=>{
    inView(".contactform",({target})=>{    
      animate(target.querySelector("h1"),
      {opacity:[0,1], y:[50, 0]},
      {delay:1.3, duration: 1, easing: [.22, .03, .26, 1]}
      ),
      animate(target.querySelector("#contact"),
      {opacity:[0,1], y:[50, 0]},
      {delay:1.3, duration: 1, easing: [.22, .03, .26, 1]}
      ),
      animate(target.querySelector(".form-group"),
      {opacity:[0,1], y:[50, 0]},
      {delay:1.8, duration: 1, easing: [.22, .5, .02, 1]}
      );
    },)
  },[]);
  return (
    <section className={`contactform ${styles.sectionbiga}`}>
        <div className={styles.container} id="contact">
          <h1>Contact Me</h1>
          <form className={`form-group ${styles.form_group}`}>
            <div className={styles.form_group_flex}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className='btn'>Submit</button>
          </form>
        </div>
      </section>
  )
}

export default Contact