import axios from 'axios';

import {API_URL} from '../../conf';

export function login(username, password) {
  return axios.post('/auth/', {username, password});
}

export default {login}
