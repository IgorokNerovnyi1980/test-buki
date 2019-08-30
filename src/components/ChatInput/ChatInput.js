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
    created_at: '',
    id: '',
    messageForStore: null,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user, addNewMessage } = this.props;
    this.setState(
      { created_at: moment().format('LLLL'), id: shortid.generate() },
      () => addNewMessage(newMessage(user, this.state)),
    );
  };
  //

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
});
const mapDispatchToProps = dispatch => ({
  addNewMessage: message => dispatch(actions.addNewMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatInput);

// this.setState(
//   { created_at: moment().format('LLLL'), id: shortid.generate() },
//   () =>
//     this.setState(
//       state => ({
//         ...state,
//         messageForStore: newMessage(user, this.state),
//       }),
//       () => addNewMessage(allPosts, this.state.messageForStore),
//     ),
// );
// };
