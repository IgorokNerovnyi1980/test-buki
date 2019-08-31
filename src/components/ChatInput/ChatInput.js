import React, { Component } from 'react';
import styles from './ChatInput.module.css';
import shortid from 'shortid';
import * as moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import newMessage from '../../services/createNewMessage';

class ChatInput extends Component {
  state = {
    message: '',
    quantityMessages: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user, addNewMessage } = this.props;
    const { message } = this.state;
    const partOfMessage = {
      created_at: moment().format('LLLL'),
      id: shortid.generate(),
      message: message,
    };

    this.setState({ message: '' });

    addNewMessage(newMessage(user, partOfMessage));

    this.setState(state => ({
      ...state,
      quantityMessages: state.quantityMessages + 1,
    }));
  };

  componentDidUpdate() {
    const { messageForEdit, clearMessage } = this.props;
    const { message } = this.state;

    if (messageForEdit !== null && message.length === 0) {
      this.setState(
        state => ({ ...state, message: messageForEdit.message }),
        () => clearMessage(),
      );
    }
    return;
  }

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
const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
  user: selectors.user(state),
  messageForEdit: selectors.message(state),
});
const mapDispatchToProps = dispatch => ({
  addNewMessage: message => dispatch(actions.addNewMessage(message)),
  clearMessage: () => dispatch(actions.clearMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatInput);
