import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const namesSections = ['home', 'about', 'contact', 'chat'];

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.list}>
      {namesSections.map(item => (
        <li key={item}>
          <Link to={item}>{item}</Link>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
