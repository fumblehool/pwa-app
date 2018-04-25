import React, { Component } from 'react';


class Facts extends Component {
	render(){
		return (
			<div>
				{(()=>{
					return this.props.facts.map((fact, index)=>{
						return (
							<div key={index}>
							{fact.name}
							===========
							{fact.value}
							============
							{fact.by}
							</div>
						);
					})
				})()}
			</div>
		);
	}
}

export default Facts;