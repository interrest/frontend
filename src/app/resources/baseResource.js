import Axios from 'axios';
import {normalize, arrayOf} from 'normalizr';

import {API_URL} from '../conf';
import store from './store';

const GET = 'GET';
const POST = 'POST';
const UPDATE = 'PATCH';
const DELETE = 'DELETE';

const defaultOptions = {};

class BaseResource {
  constructor(name, options) {
    this.name = name;
    this.options = Object.assign({}, defaultOptions, options);
    this.client = Axios.create({
      baseURL: API_URL
    });
    this.client.interceptors.request.use(config => {
      config.headers.Authorization = `Token ${store.getState().auth.token}`;
      return config;
    });
    this.client.interceptors.response.use(response => {
      return response.data;
    });

    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(response) {
    return normalize({
      [this.options.schema.getKey()]: response
    }, {
      [this.options.schema.getKey()]: arrayOf(this.options.schema)
    });
  }

  query(queryParameters) {
    return this.client.get(this.options.url, {
      params: queryParameters
    })
      .then(this.handleResponse);
  }

  get(instanceId) {
    return this.client.get(`${this.options.url}/${instanceId}`)
      .then(this.handleResponse);
  }

  create(instance) {
    return this.client.post(this.options.url, instance);
  }

  delete(instanceId) {
    return this.client.delete(`${this.options.url}/${instanceId}`);
  }
}

export default BaseResource;
