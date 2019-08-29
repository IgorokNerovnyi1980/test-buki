import React from 'react';
import styles from './DummyPages.module.css';
import Header from './Header';
import Footer from '../Footer/Footer';

const Contact = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <h1>Contact Page</h1>
    </div>
    <Footer />
  </>
);

export default Contact;
