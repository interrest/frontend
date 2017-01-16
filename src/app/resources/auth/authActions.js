import authResource from './authResource';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE';

export function login(username, password) {
  return dispatch => {
    dispatch(requestLogin());
    authResource.login(username, password)
      .then(response => {
        sessionStorage.setItem('authToken', response.data.token);
        dispatch(receiveLogin(response.data.token));
      });
  }
}

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

function receiveLogin(token) {
  return {
    type: LOGIN_RECEIVE,
    token
  };
}
