import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Icon} from 'react-materialize'


class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {email: ''};
	this.state = {pw: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({value: event.target.value});
  }
  
  handleChangePassword(event) {
	  this.setState({pw: event.target.value});
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value + " " + this.state.pw);
    event.preventDefault();
  }

  render() {
    return (
	  <div>
		<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CryptoClicker</h1>
        </header>
        <p className="App-intro">
          To get started, <b>login</b> or <b>register</b> if you don't have an account.
        </p>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChangeEmail} />
		  <input type="password" value={this.state.pw} onChange={this.handleChangePassword}/>
        </label>
        <input type="submit" value="Login" />
      </form>
	  <Button waves='light'>
		<Icon>thumb_up</Icon>
	</Button>
	  </div>
    );
  }
}

export default Login;
