import { fetchMessages } from '../services/getFetch';

export const Type = {
  FETCHALL_POSTS: 'FETCHALL_POSTS',
  ADD_NEW_MESSAGE: 'ADD_NEW_MESSAGE',
};

export function addNewMessage(message) {
  // console.log(message);
  // arr.push(message);

  return {
    type: Type.ADD_NEW_MESSAGE,
    payload: message,
  };
}

function getAllPostsSuccess(data) {
  return {
    type: Type.FETCHALL_POSTS,
    payload: data,
  };
}
export function getAllPosts() {
  return dispatch => {
    fetchMessages()
      .then(res => res.data)
      .then(data => {
        dispatch(getAllPostsSuccess(data));
      })
      .catch(err => console.log(err));
  };
}
