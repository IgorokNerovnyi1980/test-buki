import React, { Component } from 'react';
import styles from './ChatMessage.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import * as like from '../../services/logicForLike';

class ChatMessage extends Component {
  onHandleLike = e => {
    const { allPosts, user, newArrForStore } = this.props;
    const checked = e.target.checked;
    const id = e.target.value;

    if (checked) {
      newArrForStore(like.add(id, user, allPosts));
    } else {
      newArrForStore(like.remove(id, user, allPosts));
    }
  };

  render() {
    const { obj } = this.props;
    return (
      <div className={styles.wrapper}>
        <img className={styles.img} src={obj.avatar} alt={obj.user} />
        <h2 className={styles.title}>{obj.user}</h2>
        <p className={styles.text}>{obj.message}</p>
        <p className={styles.date}>{obj.created_at}</p>
        <input
          id={obj.id}
          className={styles.likeName}
          type="checkbox"
          name="like"
          value={obj.id}
          onChange={this.onHandleLike.bind()}
        />
        <label className={styles.like} htmlFor={obj.id}>
          like
        </label>
      </div>
    );
  }
}

ChatMessage.propTypes = {
  obj: PropTypes.object,
  allPosts: PropTypes.array,
  user: PropTypes.string,
  newArrForStore: PropTypes.func,
};

const mapStateToProps = state => ({
  allPosts: selectors.postsFromStore(state),
  user: selectors.userName(state),
});
const mapDispatchToProps = dispatch => ({
  newArrForStore: arr => dispatch(actions.filtredAllPosts(arr)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatMessage);
