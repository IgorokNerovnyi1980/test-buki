import { Type } from './actions';

const initialState = {
  posts: null,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCHALLPOSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
