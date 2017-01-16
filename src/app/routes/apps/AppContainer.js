import {connect} from 'react-redux';

import {queryResources} from '../../resources/resource/resourceActions';
import App from './App';

const mapStateToProps = (state, ownProps) => {
  const resources = Object.keys(state.entities.resources || {}).map(resourceId => {
    return state.entities.resources[resourceId];
  }).filter(resource => {
    return resource.app === parseInt(ownProps.params.appId);
  });
  return {
    app: state.entities.apps[ownProps.params.appId],
    resources: resources
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queryResources: () => {
      dispatch(queryResources({app: ownProps.params.appId}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
