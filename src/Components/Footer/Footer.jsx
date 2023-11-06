import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/Vector.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <img src={logo} alt="Your Logo" />
          </div>
          <div className={styles.text}>
            <p>&copy; 2023 Grimmy World</p>
            <p>Contact us: fj@buenaflor.com</p>
            <p>Alijis, Bacolod City</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
