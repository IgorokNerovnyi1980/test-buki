import { fetchMessages } from '../services/getFetch';

export const Type = {
  FETCHALLPOSTS: 'FETCHALLPOSTS',
};

export function getAllPostsSuccess(data) {
  return {
    type: Type.FETCHALLPOSTS,
    payload: data,
  };
}

export function getAllPosts() {
  return dispatch => {
    fetchMessages('https://api.dev.buki.com.ua/frontend_test')
      .then(res => res.data)
      .then(data => {
        dispatch(getAllPostsSuccess(data));
      })
      .catch(err => console.log(err));
  };
}
