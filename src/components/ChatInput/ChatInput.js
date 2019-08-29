import React, { Component } from "react";
import styles from "./ChatInput.module.css";

class ChatInput extends Component {
  render() {
    return (
      <form className={styles.wrapper} action="">
        <input className={styles.input} type="text" name="" id="" />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default ChatInput;
