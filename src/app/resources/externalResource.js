import axios from 'axios';

class externalResource {
  constructor(app, resource, actions) {
    this.client = axios.create({
      baseURL: `${app.baseUrl}/${resource.baseUrl}`
    });
    actions.forEach(action => {
      // this[action.name] = () => {
      //   this.client.request({
      //     url: action.url,
      //     method: action.method
      //   });
      // };
    })
  }
}

export default externalResource;
