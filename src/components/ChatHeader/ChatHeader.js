import React, { Component } from 'react';
import styles from './ChatHeader.module.css';
import { connect } from 'react-redux';
import getDate from '../../services/getDateOfLastMessage';
import getUsers from '../../services/getQuantityUsers';
import getMessages from '../../services/getQuantityMessages';
import * as selectors from '../../redux/selectors';

class Header extends Component {
  render() {
    const { allPosts } = this.props;
    let dateOfLastMessage = '2000.1.01 12:01';
    let users = 0;
    let messages = 0;

    if (allPosts !== null) {
      messages = getMessages(allPosts);
      users = getUsers(allPosts);
      dateOfLastMessage = getDate(allPosts);
    }
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>My Chat</h1>
        <div className={styles.statistic}>
          <p>{users} users</p>
          <p>{messages} messages</p>
        </div>
        <div className={styles.date}>
          <p>Last message: {dateOfLastMessage}</p>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
  user: selectors.userName(state),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
