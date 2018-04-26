import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Facts extends Component {
	render(){
		return (
			<Row className="mt-20">
				{(()=>{
					return this.props.facts.map((fact, index)=>{
						return (
							<Col key={index} xs={12} md={3} className="facts-card">
								<h2>
								{fact.name}
								</h2>
								<h2>
								{fact.value}
									</h2>
									<h3>
								{fact.by}
								</h3>
							</Col>
						);
					})
				})()}
			</Row>
		);
	}
}

export default Facts;