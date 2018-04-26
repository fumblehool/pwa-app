import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Search extends Component {
    state = {
        selectedFilter: 0
    };

    selectFilter = (e) => {
        this.setState({
            selectedFilter: e
        });
        this.props.changeSelectedTeam(e);
    }

    render(){
        return (
            <Col>
                
                {(()=>{
                    return this.props.options.map((option, index)=>{
                        let selected = "filter-not-selected";
                        if(this.state.selectedFilter === index){
                            selected = "filter-selected";
                        }
                        return (
                            <Row key={index} onClick={()=>{this.selectFilter(index)}}
                            className={"filter-row " + selected}>
                                {option}
                            </Row>    
                        )
                    })
                })()}
            </Col>    
        );
    }
}

export default Search;