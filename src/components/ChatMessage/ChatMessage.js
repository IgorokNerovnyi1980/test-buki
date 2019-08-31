import React, { Component } from 'react';
import styles from './ChatMessage.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import * as like from '../../services/logicForLike';

// const user = {
//   id: "9333000183101",
//   user: "Kate",
//   avatar: "https://i.pravatar.cc/300?img=5",
//   created_at: "2019-08-17 23:30:11",
//   message: "Hey, guys! Have you seen the new episode of 'Black Mirror'?"
// };

class ChatMessage extends Component {
  onHandleLike = e => {
    const { allPosts, user, newArrForStore } = this.props;
    const checked = e.target.checked;
    const id = e.target.value;

    if (checked) {
      const result = like.add(id, user, allPosts);
      newArrForStore(result);
    } else {
      const result = like.remove(id, user, allPosts);
      newArrForStore(result);
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
