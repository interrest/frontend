import appResource from './appResource';

export const APPS_QUERY_REQUEST = 'APPS_QUERY_REQUEST';
export const APPS_QUERY_SUCCESS = 'APPS_QUERY_RECEIVE';

export const APP_GET_REQUEST = 'APP_GET_REQUEST';
export const APP_GET_SUCCESS = 'APP_GET_SUCCESS';

export function queryApps() {
  return dispatch => {
    dispatch({type: APPS_QUERY_REQUEST});
    appResource.query()
      .then(response => {
        dispatch({
          type: APPS_QUERY_SUCCESS,
          entities: response.entities
        });
      });
  };
}

export function getApp(appId) {
  return dispatch => {
    dispatch({type: APP_GET_REQUEST});
    appResource.get(appId)
      .then(response => {
        dispatch({
          type: APP_GET_SUCCESS,
          entities: response.entities
        });
      });
  }
}
