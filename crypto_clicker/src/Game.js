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
		  borderRight: 'solid 5px black',
		  padding: '0px'
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
					<div class="col s12" style={{padding: "0px"}}>
						<ul class="tabs z-depth-1 black" style={{display: "inline-grid"}}>
							<li class="tab col" style={{margin: "auto"}}>
								<a class="active" href="#crypto" style={{color:"white"}}></a>
							</li>
							<div class="indicator" style={{right: "279px", left: "0px", backgroundColor:"black"}}></div>
						</ul>
					</div>
					<div style={divStyle} id="crypto">
					<img style={imgStyle} src={logo} className="App-logo" alt="logo"/>
				</div>
			</div>
				
			</Col>
			<Col s={6} style={colStyle}>
				<div style={divStyle}>
					<div class="col s12" style={{padding: "0px"}}>
						<ul class="tabs z-depth-1 black" style={{display: "inline-grid"}}>
							<li class="tab col" style={{margin: "auto"}}>
								<a class="active" style={{color:"white"}}>Highscore</a>
							</li>
							<div class="indicator" style={{right: "279px", left: "0px", backgroundColor:"white"}}></div>
						</ul>
					</div>
				</div>
			</Col>
			<Col s={3} style ={{padding: "0px"}}>
				<div style={divStyle}>
					<div class="col s12" style={{padding: "0px"}}>
						<ul class="tabs z-depth-1 black">
							<li class="tab col">
								<a href="#tab_00" class="active" style={{color:"white"}}>Generatoren</a>
							</li>
							<li class="tab col">
								<a href="#tab_01" class="" style={{color:"white"}}>Shop</a>
							</li>
							<div class="indicator" style={{right: "279px", left: "0px", backgroundColor:"white"}}></div>
						</ul>
					</div>
				</div>
			</Col>
		</Row>
	  </div>
    );
  }
}



export default Game;
