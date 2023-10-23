import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer_content}>
          <p>&copy; 2023 Your Love Boi</p>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
