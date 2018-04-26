import React, { Component } from 'react';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

import { Row, Col, Grid } from 'react-bootstrap';
import TEAM from './../../Constants/TEAM';

import Filter from './Filter';
import Search from './Search';

const data = [
	{ "name": "Page A", "uv": 1000, "pv": 2400, "amt": 2400, "uvError": [75, 20] },
	{ "name": "Page B", "uv": 300, "pv": 4567, "amt": 2400, "uvError": [90, 40] },
	{ "name": "Page C", "uv": 280, "pv": 1398, "amt": 2400, "uvError": 40 },
	{ "name": "Page D", "uv": 200, "pv": 9800, "amt": 2400, "uvError": 20 },
	{ "name": "Page E", "uv": 278, "pv": null, "amt": 2400, "uvError": 28 },
	{ "name": "Page F", "uv": 189, "pv": 4800, "amt": 2400, "uvError": [90, 20] },
	{ "name": "Page G", "uv": 189, "pv": 4800, "amt": 2400, "uvError": [28, 40] },
	{ "name": "Page H", "uv": 189, "pv": 4800, "amt": 2400, "uvError": 28 },
	{ "name": "Page I", "uv": 189, "pv": 4800, "amt": 2400, "uvError": 28 },
	{ "name": "Page J", "uv": 189, "pv": 4800, "amt": 2400, "uvError": [15, 60] },
  ];






class Graph extends Component{
	render() {
		return (
			<Grid>
			<Row>
				<Col xs={12} md={2}>
					<Filter filters={this.props.graphModes}/>
				</Col>

				<Col xs={12} md={6}>
					<ResponsiveContainer height={355}>
					<LineChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
						<Line type="monotone" dataKey="uv" stroke="#8884d8" />
						<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
					</LineChart>
					</ResponsiveContainer>
				</Col>
				
				<Col xs={12} md={4}>
					<Search/>
				</Col>
			</Row>
			</Grid>
		);
	}
}

export default Graph;