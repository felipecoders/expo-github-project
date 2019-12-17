import axios from 'axios';

const TOKEN = 'cc7e3a62b3b86860dc4f8d6e35edfb6a54f136ab';
// const TOKEN = 'SEU_TOKEN';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${TOKEN}`
  }
});

export default api;
