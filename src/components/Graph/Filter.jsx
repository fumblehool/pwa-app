import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

class Filter extends Component {

    state = {
        selectedFilter: 0
    };

    selectFilter = (e) => {
        this.setState({
            selectedFilter: e
        });
    }

    render(){
        return (
            <Col>
                {(()=>{
                    return this.props.filters.map((filter, index)=>{
                        let selected = "filter-not-selected";
                        if(this.state.selectedFilter === index){
                            selected = "filter-selected";
                        }
                        return (
                            <Row key={index} onClick={()=>{this.selectFilter(index)}}
                                className={"filter-row " + selected} >
                                {filter}
                            </Row>
                        );
                    })
                })()}
            </Col>
        );
    }
}

export default Filter;