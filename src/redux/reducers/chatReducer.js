import { Type } from '../actions';

const initialState = {
  posts: null,
  usersInChat: 0,
  messagesInChat: 0,
  userName: 'Taylor',
  userMessage: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCHALL_POSTS:
      return { ...state, posts: action.payload };
    case Type.FETCH_QUANTITY_USERS:
      return { ...state, usersInChat: action.payload };
    case Type.FETCH_QUANTITY_MESSAGES:
      return { ...state, messagesInChat: action.payload };
    case Type.NAME_USER:
      return { ...state, userName: action.payload };
    case Type.MESSAGE_USER:
      return { ...state, userMessage: action.payload };
    default:
      return state;
  }
};
export default chatReducer;
