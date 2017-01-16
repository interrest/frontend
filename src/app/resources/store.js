import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import merge from 'lodash/merge';

import authReducer from './auth/authReducer';

const entityReducer = (state = {}, action) => {
  if (action.entities) {
    return merge({}, state, action.entities)
  }
  return state;
};
const rootReducer = combineReducers({
  entities: entityReducer,
  auth: authReducer
});


const initialState = {
  auth: {
    token: sessionStorage.getItem('authToken')
  }
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
