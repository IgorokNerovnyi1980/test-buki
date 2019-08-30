import React, { Component } from 'react';
import styles from './ChatInput.module.css';
import shortid from 'shortid';

class ChatInput extends Component {
  state = {
    message: '',
    created_at: '',
    id: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ created_at: Date(), id: shortid.generate() }, () =>
      console.log(this.state),
    );
  };
  render() {
    const { message } = this.state;
    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="message"
          value={message}
          onChange={this.handleChange}
          id=""
          placeholder=" say Hallo"
        />
        <button className={styles.button} type="submit" name="send">
          Send
        </button>
      </form>
    );
  }
}

export default ChatInput;
