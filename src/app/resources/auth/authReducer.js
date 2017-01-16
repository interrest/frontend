import {
  LOGIN_RECEIVE,
  LOGIN_REQUEST
} from './authActions';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_RECEIVE:
      return Object.assign({}, state, {
        token: action.token,
        isAuthenticated: true
      });
    default:
      return state;
  }
}
