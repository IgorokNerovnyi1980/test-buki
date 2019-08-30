import axios from 'axios';

export const fetchMessages = () =>
  axios.get('https://api.dev.buki.com.ua/frontend_test');
