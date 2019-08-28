import React from "react";
import styles from "./Header.module.css";

const users = 5;
const messages = 8;
const date = "2019.18.01 13.02";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>My Chat</h1>
    <div className={styles.statistic}>
      <p>{users} users</p>
      <p>{messages} messages</p>
    </div>
    <div className={styles.date}>
      <p>Last message: {date}</p>
    </div>
  </header>
);
export default Header;
