import React, { Component } from 'react';
import styles from './ChatMessage.module.css';

class MyMessage extends Component {
  onDeleteMessage = id => {
    console.log(id);
    alert('click');
  };
  render() {
    const { obj } = this.props;
    return (
      <div className={styles.wrapperMyMessage}>
        <img className={styles.img} src={obj.avatar} alt={obj.user} />
        <h2 className={styles.title}>{obj.user}</h2>
        <p className={styles.textMyMessage}>{obj.message}</p>
        <p className={styles.dateMyMessage}>{obj.created_at}</p>
        <button
          type="button"
          onClick={this.onDeleteMessage(obj.id)}
          className={styles.delete}
        ></button>
        <p className={styles.edit}>Edit</p>
      </div>
    );
  }
}

export default MyMessage;
