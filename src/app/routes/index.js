import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from '../resources/store';
import LoginContainer from './login/LoginContainer';
import AppsContainer from './apps/AppsContainer';
import AppContainer from './apps/AppContainer';
import ResourcesContainer from './apps/ResourcesContainer';
import ResourceContainer from './apps/ResourceContainer';

const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.isAuthenticated) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/apps">
          <IndexRoute component={AppsContainer}/>
          <Route path=":appId" component={AppContainer}>
            <IndexRoute component={ResourcesContainer}/>
            <Route path="resource/:resourceId" component={ResourceContainer}>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default App;
