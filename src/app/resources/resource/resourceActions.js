import resourceResource from './resourceResource';

export const RESOURCES_QUERY_REQUEST = 'RESOURCES_QUERY_REQUEST';
export const RESOURCES_QUERY_SUCCESS = 'RESOURCES_QUERY_RECEIVE';

export function queryResources(queryParams) {
  return dispatch => {
    dispatch({type: RESOURCES_QUERY_REQUEST});
    resourceResource.query(queryParams)
      .then(response => {
        dispatch({
          type: RESOURCES_QUERY_SUCCESS,
          entities: response.entities
        });
      });
  };
}
