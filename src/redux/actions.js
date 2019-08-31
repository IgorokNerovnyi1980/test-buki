import { fetchMessages } from '../services/getFetch';

export const Type = {
  FETCHALL_POSTS: 'FETCHALL_POSTS',
  ADD_NEW_MESSAGE: 'ADD_NEW_MESSAGE',
  DELETE_MESSEGE: 'DELETE_MESSEGE',
  EDIT_MESSEGE: 'EDIT_MESSEGE',
};

export function editMessage(message) {
  return {
    type: Type.EDIT_MESSEGE,
    payload: message,
  };
}

export function newArrForStore(arr) {
  return {
    type: Type.DELETE_MESSEGE,
    payload: arr,
  };
}

export function addNewMessage(message) {
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
