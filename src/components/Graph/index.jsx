import React, { Component } from 'react';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

import { Row, Col, Grid } from 'react-bootstrap';

import Filter from './Filter';
import Search from './Search';

import {GraphDataNormaliser} from '../../utils';

class Graph extends Component{

	state = {
		filterName: this.props.graphModes[0],
		teamName: this.props.objectsName[0],
	}

	changeSelectedTeam = (index) => {
		this.setState({
			teamName: this.props.objectsName[index]
		});
	}

	changeActiveFilter = (index) => {
		this.setState({
			filterName: this.props.graphModes[index]
		});
	}


	render() {
		const data = GraphDataNormaliser(this.state.filterName, this.state.teamName, this.props.objectsList);
		
		
		return (
			<Grid>
			<Row>
				<Col xs={12} md={2}>
					<Filter 
						filters={this.props.graphModes}
						changeActiveFilter={this.changeActiveFilter}
					/>
				</Col>

				<Col xs={12} md={6}>
					<ResponsiveContainer height={355}>
					<LineChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
						<Line type="monotone" dataKey={this.props.dataKey} stroke="#8884d8" />
						<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
					</LineChart>
					</ResponsiveContainer>
				</Col>
				
					<Col xs={12} md={4}>
					<Search
						data={this.props.objectsList}
						options={this.props.objectsName}
						changeSelectedTeam={this.changeSelectedTeam}
					/>
				</Col>
			</Row>
			</Grid>
		);
	}
}

export default Graph;