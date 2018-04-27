import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Search extends Component {
    state = {
        selectedFilter: this.props.options[0],
        searchText: "",
        records: this.props.options
    };

    selectFilter = (name) => {
        let recordName = name.toLowerCase();
        let tempArray = this.props.options.map((option)=> {
            return option.toLowerCase();
        })

        const e = tempArray.indexOf(recordName);

        this.setState({
            selectedFilter: this.props.options[e]
        });
        this.props.changeSelectedTeam(e);
    }

    onSelectedTextChange = (e) => {
        let searchText = e.target.value.toLowerCase();
        
        let options = this.props.options;
        const records = options.filter((record) => {
            return record.toLowerCase().indexOf(searchText) !== -1;
        })

        this.setState({
            records,
            searchText
        })
    }

    render(){
        return (
            <Col className="search-div">
                <Row>
                    <input type="text" 
                        value={this.state.searchText} 
                        onChange={this.onSelectedTextChange}
                        className="searchbar"
                        placeholder="Search"
                    />
                </Row>
                {(()=>{
                    return this.state.records.map((option, index)=>{
                        let selected = "filter-not-selected";
                        if(this.state.selectedFilter.toLowerCase() === option.toLowerCase()){
                            selected = "filter-selected";
                        }
                        return (
                            <Row key={index} onClick={()=>{this.selectFilter(option)}}
                            className={"filter-row text-center " + selected}>
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