import React, { Component } from 'react';

import { Row, NavItem, Nav, Grid } from 'react-bootstrap';

import FACTS from './../../Constants/FACTS.json';
import BATSMEN from './../../Constants/TOP_BATSMEN.json';
import BOWLERS from './../../Constants/TOP_BOWLERS.json';


import Facts from './Facts';
import TopPlayers from './TopPlayers';


class Home extends Component {
		
	state = {
		activeTabIndex: 1
	}
	
	
	handleTabClick = (e) => {
		this.setState({
			activeTabIndex: e
		});
	}


	render(){
		return (
			<Grid>
		<Row>
			  <Nav bsStyle="tabs" className="col-white" justified activeKey={this.state.activeTabIndex} onSelect={this.handleTabClick}>
				<NavItem eventKey={1} className="col-white">
				  Facts
				</NavItem>
				<NavItem eventKey={2}>
				  Top10 Batsmen
				</NavItem>
				<NavItem eventKey={3}>
				  Top10 Bowlers
				</NavItem>
  			</Nav>
		</Row>
			{(()=>{
				if(this.state.activeTabIndex === 1){
					return(
						<Facts facts={FACTS}/>
					);
				}
				else if(this.state.activeTabIndex === 2){
					return(
						<TopPlayers players={BATSMEN}/>
					);
				}
				else {
					return(
						<TopPlayers players={BOWLERS}/>
					);
				}
			})()}
		</Grid>	
		);
	}
}

export default Home;