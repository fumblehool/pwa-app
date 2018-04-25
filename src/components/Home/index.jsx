import React, { Component } from 'react';


import FACTS from './../../Constants/FACTS.json';
import BATSMEN from './../../Constants/TOP_BATSMEN.json';
import BOWLERS from './../../Constants/TOP_BOWLERS.json';


import Facts from './Facts';
import Batsmen from './Batsmen';
import Bowlers from './Bowlers';
import Teams from './Teams';


class Home extends Component {
		
	state = {
		activeTabIndex: 0
	}
	
	
	handleTabClick = (e) => {
		this.setState({
			activeTabIndex: e.target.value
		});
	}


	render(){
		return (
		<section>
			<div>
				<ul>
					<li value="0" onClick={this.handleTabClick}> Teams</li>
					<li value="1" onClick={this.handleTabClick}> Top 10 Batsmen</li>
					<li value="2" onClick={this.handleTabClick}> Top 10 Bowlers</li>
					<li value="3" onClick={this.handleTabClick}> Facts</li>
				</ul>
			</div>

			{(()=>{
				if(this.state.activeTabIndex === 0){
					return(
						<Teams/>
					);
				}
				else if(this.state.activeTabIndex === 1){
					return(
						<Batsmen batsmen={BATSMEN}/>
					);
				}
				else if(this.state.activeTabIndex === 2){
					return(
						<Bowlers bowlers={BOWLERS}/>
					);
				}
				else {
					return(
						<Facts facts={FACTS}/>
					);
				}

			})()}


		</section>	
		);
	}
}

export default Home;