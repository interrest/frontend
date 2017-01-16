import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
      browserHistory.push('/apps');
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmitClick() {
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/><br/>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button onClick={this.handleSubmitClick}>Login</button>
      </div>
    );
  }
}

export default Login;
