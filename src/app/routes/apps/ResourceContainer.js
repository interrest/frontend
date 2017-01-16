import {connect} from 'react-redux';

import Resource from './Resource';

const mapStateToProps = (state, ownProps) => {
  const resource = state.entities.resources[ownProps.params.resourceId];
  const actions = resource.actions.map(actionId => {
    return state.entities.actions[actionId];
  });
  return {
    app: state.entities.apps[ownProps.params.appId],
    resource: resource,
    actions: actions
  };
};

export default connect(mapStateToProps)(Resource);
