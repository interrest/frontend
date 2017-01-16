import axios from 'axios';

export const API_URL = process.env.production ? '' : 'http://localhost:8000';

axios.defaults.baseURL = API_URL;
