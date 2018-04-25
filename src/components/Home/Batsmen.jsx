import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

const fieldNames = ['name'];


class Batsmen extends Component {
	render(){
		return (
			<div>
			<Table responsive condensed>
				<thead>
                  <tr>
                    {(() => {
                      return fieldNames.map((field) => {
                        return (
                          <th className="publish__table__header">
                            <b>{field}</b>
                          </th>
                        );
                      });
                    })()}
                  </tr>
                  </thead>
                  <tbody>
                  	{(()=>{
                  		return this.props.batsmen.map((player)=>{
                  			return (
                  				<td>
                  					{player.name}
                  				</td>
                  			)
                  		})
                  	})()}
                  </tbody>
			</Table>
			</div>
		);
	}
}

export default Batsmen;