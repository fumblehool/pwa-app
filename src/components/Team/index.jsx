import React, { Component } from 'react';

import TEAM from './../../Constants/TEAM.json';

import Graph from './../Graph';

class Team extends Component {

    state = {
        graphModes: ["Max Score", "Total 6s & 4s", "Match Won", "Match Won if Toss Won %", "Match Won if Bat first %", "Match Won if Ball first %"],
        graphColorsCurrent: {x0: "#82ca9d", x1: "#3FAEFF"}
    }

    componentDidMount(){
        this.setState({
            teams: TEAM
        });
    }

    render(){
        return (
            <div>
                <Graph 
                    objectsList={this.state.teams}
                    graphModes={this.state.graphModes}
                    graphColorsCurrent={this.state.graphColorsCurrent}
                    switchName="Teams"
                    alert="Please remove team to add another"
                    dataFunctionKey="getTeamData"
                    searchPlaceholder="Search Teams"
                />
            </div>
        );
    }
}

export default Team;