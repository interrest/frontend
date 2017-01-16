import React, {Component} from 'react';

import externalResource from '../../resources/externalResource';

class Resource extends Component {
  componentDidMount() {
    this.resource = new externalResource(this.props.app, this.props.resource, this.props.actions);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Resource;
