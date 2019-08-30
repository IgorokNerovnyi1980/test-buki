import { fetchMessages } from '../services/getFetch';

export const Type = {
  FETCHALL_POSTS: 'FETCHALL_POSTS',
  FETCH_QUANTITY_USERS: 'FETCH_QUANTITY_USERS',
  FETCH_QUANTITY_MESSAGES: 'FETCH_QUANTITY_MESSAGES',
};

// export function getQuantityUsers(data) {
//   return {
//     type: Type.FETCH_QUANTITY_USERS,
//     payload: data,
//   };
// }

// function getQuantityMessages(arr) {
//   return {
//     type: Type.FETCH_QUANTITY_MESSAGES,
//     payload: arr.length,
//   };
// }

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
