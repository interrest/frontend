import React, {Component} from 'react';
import {Link} from 'react-router';

class Apps extends Component {
  componentDidMount() {
    this.props.queryApps();
  }

  render() {
    const apps = Object.keys(this.props.apps || {}).map(appId => {
      const app = this.props.apps[appId];
      return <Link to={`/apps/${app.id}`} key={app.id}>{app.name}</Link>;
    });
    return (
      <div>
        <h1>Apps</h1>
        {apps}
      </div>
    );
  }
}

export default Apps;
