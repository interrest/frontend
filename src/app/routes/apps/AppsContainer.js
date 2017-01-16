import {connect} from 'react-redux';

import {queryApps} from '../../resources/app/appActions';
import Apps from './Apps';

const mapStateToProps = state => {
  return {
    apps: state.entities.apps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    queryApps: () => {
      dispatch(queryApps());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Apps);
