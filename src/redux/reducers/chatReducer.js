import { Type } from '../actions';

const initialState = {
  posts: null,
  user: { user: 'Taylor', avatar: 'https://i.pravatar.cc/300?img=12' },
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCHALL_POSTS:
      return { ...state, posts: action.payload };
    case Type.ADD_NEW_MESSAGE:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
export default chatReducer;
