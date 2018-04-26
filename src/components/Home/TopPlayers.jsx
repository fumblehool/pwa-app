import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

const fieldNames = ["Name", "Total Score", "Balls Played", "Max Score",
                    "Match Played", "Wickets", "Total Runs Given" ];

class TopPlayers extends Component {
	render(){
		return (
			<div>
			<Table responsive condensed className="mt-10">
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
            return this.props.players.map((player, index)=>{
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.totalScore}</td>
                  <td>{player.ballPlayed}</td>
                  <td>{player.maxScore}</td>
                  <td>{player.matchPlayed}</td>
                  <td>{player.wickets}</td>
                  <td>{player.totalRunGiven}</td>
                </tr>
              )
            })
          })()}
        </tbody>
			</Table>
			</div>
		);
	}
}

export default TopPlayers;