import React, { Component } from 'react';
import logo from './Bitcoin.svg';
import './App.css';

import {Button, Icon, Col, Input, Row} from 'react-materialize'

export default class Register extends Component {
	constructor(props) {
    super(props);
    this.state = {email: ''};
	this.state = {pw: ''};
	this.state = {pwConfirm: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangePassword = this.handleChangePassword.bind(this);
	this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({value: event.target.value});
  }
  
  handleChangePassword(event) {
	  this.setState({pw: event.target.value});
  }
  
  handleChangePasswordConfirm(event) {
	  this.setState({pwConfirm: event.target.value});
  }

  handleSubmit(event) {
	if (this.state.pw != this.state.pwConfirm) {
		alert('Password and confirmed password are not equal');
		return;
	}
    alert('An email was submitted: ' + this.state.value + " " + this.state.pw);
    event.preventDefault();
  }

  render() {
    return (
	  <div>
		<div className="App">
        <header style={{height: 200}} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CryptoClicker</h1>
        </header>
        <p className="App-intro">
          To get started, <b>login</b> or <b>register</b> if you don't have an account.
        </p>
      </div>
	  <div class="row">
	<Col offset="s4" s={8}>
	<Input type="email" s={6} label="Email" value={this.state.value} onChange={this.handleChangeEmail}><Icon>email</Icon></Input>
	</Col>
	<Col offset="s4" s={8}>
    <Input type="password" s={6} label="Password" value={this.state.pw} onChange={this.handleChangePassword}><Icon>lock</Icon></Input>
	</Col>
	<Col offset="s4" s={8}>
    <Input type="password" s={6} label="Confirm Password" value={this.state.pwConfirm} onChange={this.handleChangePasswordConfirm}><Icon>lock</Icon></Input>
	</Col>
	<Col offset="s4">
	<Button type="submit" onClick={this.handleSubmit}>Register</Button>
	</Col>
	
	  </div>
	  </div>
    );
  }
}