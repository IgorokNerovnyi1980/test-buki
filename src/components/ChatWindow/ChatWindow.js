import React, { Component } from 'react';
import styles from './ChatWindow.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import ChatMessage from '../ChatMessage/ChatMessage';
import MyMessage from '../ChatMessage/MyMessage';

const myName = 'Taylor';

class ChatWindow extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { allPosts } = this.props;
    return (
      <div className={styles.wrapper}>
        {allPosts &&
          allPosts.map(item =>
            item.user !== myName ? (
              <ChatMessage obj={item} key={item.id} />
            ) : (
              <MyMessage obj={item} key={item.id} />
            ),
          )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
});
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(actions.getAllPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatWindow);
