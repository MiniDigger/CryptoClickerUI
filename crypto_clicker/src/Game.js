import React, { Component } from 'react';
import './App.css';
import logo from './Bitcoin.svg';
import gpu from './gpu.png';

import {Button, Icon, Col, Input, Row, Tabs, Tab, Card, CardTitle, Table} from 'react-materialize'
import ReactDOM from 'react-dom';


class Game extends Component {
	constructor(props) {
    super(props);
    this.state = {
        data: []
    }
  }
	componentDidMount() {
		fetch("https://api.myjson.com/bins/qzjix", {
		method: 'GET'
	})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({data: result});
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert('Dont know');
        }
      )
    
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
		top: 0, left: 0, right: 0, bottom: 0,
		height: '200px'
	  };
	  var tabsStyle={
		color: 'black',
		marginTop: '10px'		
	  };
    return (
	  <div>
		<Row>
			<Col s={3} style={colStyle}>
				<div className="col s12" style={{padding: "0px"}}>
					<ul className="tabs z-depth-1 black" style={{display: "inline-grid"}}>
						<li className="tab col" style={{margin: "auto"}}>
							<a className="active" href="#crypto" style={{color:"white"}}></a>
						</li>
						<div className="indicator" style={{right: "279px", left: "0px", backgroundColor:"black"}}></div>
					</ul>
				</div>
				<div style={divStyle} id="crypto">
					<img style={imgStyle} src={logo} className="App-logo" alt="logo"/>
				</div>
			</Col>
			<Col s={6} style={colStyle}>
				<div className="col s12" style={{padding: "0px"}}>
					<ul className="tabs z-depth-1 black" style={{display: "inline-grid"}}>
						<li className="tab col" style={{margin: "auto"}}>
							<a className="active" href="#highscore" style={{color:"white"}}>Highscore</a>
						</li>
						<div className="indicator" style={{right: "279px", left: "0px", backgroundColor:"white"}}></div>
					</ul>
				</div>
				<Table striped centered id="highscore">
					<thead> <tr> <th>#</th> <th>Name</th> <th>Crypto per Second</th></tr> </thead>
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.rank}</td>
                      <td>{item.name}</td>
                      <td>{item.cryptopersecond}</td>
                  </tr>
                )
             
             })}</tbody>
       </Table>
				<div style={divStyle} id="tab_00">
					
				</div>
			</Col>
			<Col s={3} style ={{padding: "0px"}}>
				<div className="col s12" style={{padding: "0px"}}>
					<ul className="tabs z-depth-1 black">
						<li className="tab col">
							<a href="#generatoren" className="active" style={{color:"white"}}>Generatoren</a>
						</li>
						<li className="tab col">
							<a href="#upgrades" className="" style={{color:"white"}}>Upgrades</a>
						</li>
						<div className="indicator" style={{right: "279px", left: "0px", backgroundColor:"white"}}></div>
					</ul>
				</div>
				<div id="generatoren">
					<Col m={12}>
						<Card className='small horizontal blue-grey lighten-5' header={<CardTitle key='1' image={gpu} src={gpu} style={{padding:'10px'}}/>} actions={[<Button key='1' floating large className='red' waves='light' icon='add'/>]}>
							I am a very simple card.
						</Card>
						<Card className='small horizontal blue-grey lighten-5' header={<CardTitle key='1' image={gpu} src={gpu} style={{padding:'10px'}}/>} actions={[<Button key='1' floating large className='red' waves='light' icon='add'/>]}>
							I am a very simple card.
						</Card>
						<Card className='small horizontal blue-grey lighten-5' header={<CardTitle key='1' image={gpu} src={gpu} style={{padding:'10px'}}/>} actions={[<Button key='1' floating large className='red' waves='light' icon='add'/>]}>
							I am a very simple card.
						</Card>
						<Card className='small horizontal blue-grey lighten-5' style={{filter: 'opacity(30%)'}} header={<CardTitle key='1' image={gpu} src={gpu} style={{padding:'10px'}}/>} actions={[<Button key='1' floating large className='red' waves='light' icon='add'/>]}>
							I am a very simple card.
						</Card>
						<Card className='small horizontal blue-grey lighten-5' header={<CardTitle key='1' image={gpu} src={gpu} style={{padding:'10px'}}/>} actions={[<Button key='1' floating large className='red' waves='light' icon='add'/>]}>
							I am a very simple card.
						</Card>
					</Col>
				</div>
				<div id="upgrades">
					<h1>test</h1>
				</div>
			</Col>
		</Row>
	  </div>
    );
  }
}



export default Game;
