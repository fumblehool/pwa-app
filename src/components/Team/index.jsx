import React, { Component } from 'react';

import TEAM from './../../Constants/TEAM.json';
import TEAMS from './../../Constants/TEAMS.json';
import Graph from './../Graph';

class Team extends Component {
    state = {
        graphModes: ["Max Score", "Total 6s & 4s", "Match Won", "Match Won if Toss Won %", "Match Won if Bat first %", "Match Won if Ball first %"],
        graphColorsCurrent: {x0: "#82ca9d", x1: "#3FAEFF"}
    };

    render(){
        return (
            <div>
                <Graph 
                    objectsList={TEAM}
                    objectsName={TEAMS}
                    graphModes={this.state.graphModes}
                    graphColorsCurrent={this.state.graphColorsCurrent}
                    graphType="teams"
                    alert="Please remove team to add another"
                    dataKey="value"
                    searchPlaceholder="Search Teams"
                />
            </div>
        );
    }
}

export default Team;