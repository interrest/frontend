import React, {Component} from 'react';
import {Link} from 'react-router';

class Resources extends Component {
  componentDidMount() {
    this.props.queryResources();
  }

  render() {
    const resources = this.props.resources.map(resource => {
      return <Link key={resource.id} to={`${this.props.location.pathname}/resource/${resource.id}`}>{resource.name}</Link>;
    });
    return (
      <div>{resources}</div>
    );
  }
}

export default Resources;
