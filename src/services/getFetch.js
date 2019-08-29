import axios from 'axios';

const url = '​https://api.dev.buki.com.ua/frontend_test​';

export const fetchMessages = () => axios.get(url);
