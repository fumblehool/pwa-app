import React, { Component } from 'react';

import PLAYERSLIST from './../../Constants/PLAYERSLIST.json';

import Graph from './../Graph';

import { getPlayerNames } from './../../utils';


class Player extends Component {

    state = {
        graphModes: ["Max Score", "Total 6s & 4s", "Match Won", "Match Won if Toss Won %", "Match Won if Bat first %", "Match Won if Ball first %"],
        graphColorsCurrent: {x0: "#82ca9d", x1: "#3FAEFF"},
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <Graph 
                    objectsList={PLAYERSLIST}
                    objectsName={getPlayerNames(PLAYERSLIST)}
                    graphModes={this.state.graphModes}
                    graphColorsCurrent={this.state.graphColorsCurrent}
                    dataKey="value"
                    graphType="players"
                />
            </div>
        );
    }
}

export default Player;