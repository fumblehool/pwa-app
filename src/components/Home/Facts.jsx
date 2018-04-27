import React, { Component } from 'react';

import { Row, Col, Modal } from 'react-bootstrap';

class Facts extends Component {

	state = {
		record: {},
		showModal: false
	};

	onCardClick = (index) => {
		this.setState({
			record: this.props.facts[index]
		});
		this.showModalDialog();
	}

	showModalDialog = () => {
		this.setState({
			showModal: true
		});
	}

	closeModalDialog = () => {
		this.setState({
			showModal: false
		});
	}

	ComponentModal = () => {
		return (
			<Modal className="black-text" show={this.state.showModal} onHide={this.closeModalDialog}>
				<Modal.Header closeButton>
					<Modal.Title>
						{this.state.record['name']}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						{this.state.record['description']}
					</p>
				</Modal.Body>
			</Modal>
		);
	}


	render(){
		return (
			<Row className="mt-20">
				{this.ComponentModal()}
				{(()=>{
					return this.props.facts.map((fact, index)=>{
						return (
							<Col key={index} xs={12} md={3} className="facts-card">
								<div className="text-center cursor" onClick={()=>{this.onCardClick(index)}}>
								<h2>
								{fact.name}
								</h2>
								<h2>
								{fact.value}
									</h2>
									{(()=>{
										if(fact.by){
											return (
												<h3>
												({fact.by})
												</h3>
											)
										}
									})()}
								</div>
							</Col>
						);
					})
				})()}
			</Row>
		);
	}
}

export default Facts;