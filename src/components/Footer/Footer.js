import React from "react";
import styles from "./Footer.module.css";

const namesSections = ["Home", "About", "Contact Us"];

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.list}>
      {namesSections.map(item => (
        <li key={item}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
