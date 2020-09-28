import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component{

    constructor(props){
        super(props)
        this.state={search:''}
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    render(){

        const {handleSearch}=this.props;
        const {search}= this.state

        return(
            <center className="mb-4 mt-4">
                <div className="searchContainer">
                    <input 
                    value={search}
                    onChange={this.handleChange}
                    className="search-input" 
                    type="text" 
                    placeholder="Escribe un código o un sku..."/>
                    <button className="search-btn" onClick={()=>handleSearch(search)}>Buscar</button>
                </div>
            </center>
        )
    }
}

Search.proptype={
    handleSearch: PropTypes.func.isRequired
}

export default Search;