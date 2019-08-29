import React from 'react';
import styles from './ChatMessage.module.css';

const MyMessage = ({ obj }) => (
  <div className={styles.wrapperMyMessage}>
    <img className={styles.img} src={obj.avatar} alt={obj.user} />
    <h2 className={styles.title}>{obj.user}</h2>
    <p className={styles.textMyMessage}>{obj.message}</p>
    <p className={styles.dateMyMessage}>{obj.created_at}</p>
  </div>
);

export default MyMessage;
