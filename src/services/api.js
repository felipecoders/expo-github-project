import axios from 'axios';

const TOKEN = 'SEU_TOKEN';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${TOKEN}`
  }
});

export default api;
