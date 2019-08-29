import React from 'react';
import styles from './DummyPages.module.css';
import Header from './Header';
import Footer from '../Footer/Footer';

const About = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h1>About us Page</h1>
    </div>
    <Footer />
  </>
);

export default About;
