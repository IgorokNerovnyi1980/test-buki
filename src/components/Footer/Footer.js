import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const namesSections = ['home', 'about', 'contact', 'chat'];

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.list}>
      {namesSections.map(item => (
        <li key={item}>
          <NavLink className={styles.link} to={item}>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
