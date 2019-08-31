import React, { Component } from 'react';
import styles from './ChatMessage.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

class MyMessage extends Component {
  onEditMessage = e => {
    const { allPosts, newArrForStore, messageForEdit } = this.props;

    const id = e.target.value;
    const message = allPosts.filter(item => item.id === id);
    messageForEdit(message[0]);
    newArrForStore(allPosts.filter(item => item.id !== id));
  };

  onDeleteMessage = e => {
    const { allPosts, newArrForStore } = this.props;
    const id = e.target.value;
    // eslint-disable-next-line
    newArrForStore(allPosts.filter(item => item.id !== id));
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
          onClick={this.onDeleteMessage.bind()}
          type="button"
          value={obj.id}
          className={styles.delete}
        >
          x
        </button>
        <button
          type="button"
          value={obj.id}
          className={styles.edit}
          onClick={this.onEditMessage.bind()}
        >
          Edit
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
});

const mapDispatchToProps = dispatch => ({
  newArrForStore: arr => dispatch(actions.newArrForStore(arr)),
  messageForEdit: message => dispatch(actions.editMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyMessage);
