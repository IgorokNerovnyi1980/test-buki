import React, { Component } from 'react';
import styles from './ChatWindow.module.css';
import ScrollableFeed from 'react-scrollable-feed';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import ChatMessage from '../ChatMessage/ChatMessage';
import MyMessage from '../ChatMessage/MyMessage';
import Loader from '../dummyPages/Loader';

class ChatWindow extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { allPosts, user } = this.props;
    return (
      <div className={styles.wrapper}>
        <ScrollableFeed>
          {!allPosts ? (
            <Loader />
          ) : (
            allPosts.map(item =>
              item.user !== user ? (
                <ChatMessage obj={item} key={item.id} />
              ) : (
                <MyMessage obj={item} key={item.id} />
              ),
            )
          )}
        </ScrollableFeed>
      </div>
    );
  }
}

ChatWindow.propTypes = {
  allPosts: PropTypes.array,
  user: PropTypes.string,
  fetchPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
  user: selectors.userName(state),
});
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(actions.getAllPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatWindow);
