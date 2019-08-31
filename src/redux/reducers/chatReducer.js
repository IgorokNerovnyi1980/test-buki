import { Type } from '../actions';

const initialState = {
  posts: null,
  user: { user: 'Taylor', avatar: 'https://i.pravatar.cc/300?img=12' },
  editMessage: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCHALL_POSTS:
      return { ...state, posts: action.payload };
    case Type.ADD_NEW_MESSAGE:
      return { ...state, posts: [...state.posts, action.payload] };
    case Type.DELETE_MESSEGE:
      return { ...state, posts: action.payload };
    case Type.EDIT_MESSEGE:
      return { ...state, editMessage: action.payload };
    case Type.CLEAR_MESSEGE:
      return { ...state, editMessage: action.payload };
    default:
      return state;
  }
};
export default chatReducer;
