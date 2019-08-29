import React from "react";
import styles from "./ChatMessage.module.css";

// const user = {
//   id: "9333000183101",
//   user: "Kate",
//   avatar: "https://i.pravatar.cc/300?img=5",
//   created_at: "2019-08-17 23:30:11",
//   message: "Hey, guys! Have you seen the new episode of 'Black Mirror'?"
// };

const ChatMessage = ({ obj, key }) => (
  <div key={key} className={styles.wrapper}>
    <img className={styles.img} src={obj.avatar} alt={obj.user} />
    <h2 className={styles.title}>{obj.user}</h2>
    <p className={styles.text}>{obj.message}</p>
    <p className={styles.date}>{obj.created_at}</p>
    <p className={styles.like}>like</p>
  </div>
);

export default ChatMessage;
