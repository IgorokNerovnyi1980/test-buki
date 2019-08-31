import { fetchMessages } from '../services/getFetch';

export const Type = {
  FETCH_ALL_POSTS: 'FETCH_ALL_POSTS',
  FILTER_ALL_POSTS: 'FILTER_ALL_POSTS',
  ADD_NEW_MESSAGE: 'ADD_NEW_MESSAGE',
  DELETE_MESSEGE: 'DELETE_MESSEGE',
  EDIT_MESSEGE: 'EDIT_MESSEGE',
  CLEAR_MESSEGE: 'CLEAR_MESSEGE',
};

export function filtredAllPosts(arr) {
  return {
    type: Type.FILTER_ALL_POSTS,
    payload: arr,
  };
}

export function clearMessage() {
  return {
    type: Type.CLEAR_MESSEGE,
    payload: null,
  };
}

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
    type: Type.FETCH_ALL_POSTS,
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
