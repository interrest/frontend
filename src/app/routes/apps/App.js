import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.app && this.props.app.name}</h2>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default App;
