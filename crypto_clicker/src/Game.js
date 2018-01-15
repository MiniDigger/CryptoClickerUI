import React, { Component } from 'react';
import './App.css';
import logo from './Bitcoin.svg';

import {Button, Icon, Col, Input, Row, Tabs, Tab} from 'react-materialize'
import ReactDOM from 'react-dom';


class Game extends Component {
	constructor(props) {
    super(props);
}

  render() {
	  var colStyle={
		  borderRight: 'solid 5px'
	  };
	  var divStyle={
		  height: '100vh',
		  position: 'relative'
	  };
	  var imgStyle={
		margin: 'auto', 
		position: 'absolute', 
		top: 0, left: 0, right: 0, bottom: 0
	  };
	  var tabsStyle={
		color: 'black',
		marginTop: '10px'		
	  };
    return (
	  <div>
		<Row>
			<Col s={3} style={colStyle}>
				<div style={divStyle}>
					<img style={imgStyle} src={logo} className="App-logo" alt="logo"/>
				</div>
			</Col>
			<Col s={6} style={colStyle}>
				<div style={divStyle}>
					
				</div>
			</Col>
			<Col s={3}>
				<div style={divStyle}>
					<div style={{marginTop: '10px'}}>
						<Tabs className='z-depth-1 black' style={tabsStyle}>
							<Tab title="Generatoren" active>Test 1</Tab>
							<Tab title="Shop">Test 2</Tab>
						</Tabs>
					</div>
				</div>
			</Col>
		</Row>
	  </div>
    );
  }
}



export default Game;
