import { combineReducers } from 'redux';
import chatReducer from '../redux/reducers/chatReducer';

export default combineReducers({
  chat: chatReducer,
});
