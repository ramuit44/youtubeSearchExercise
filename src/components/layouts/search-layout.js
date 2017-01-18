import React, { Component } from 'react';
import SearchBarContainer from '../containers/searchBar-container';
import SearchFilterLayout from './searchFilter-layout';
require('../../../style/search-layout.scss');




//Stateless Component for layouting the SearchBarContainer and SearchFilter Layout
class SearchLayout extends Component {

	constructor(props){
		super(props); 
		
	}

	
	//render method for the component
	render(){

		

	    //Use the Autosuggest component with different call backs. Wrap it around form to handle the default onsubmit event
	    //on hit of enter after entering search string without autosuggest selection
		return (
				<div className="center container">
					<div className="search-bar">
						
						<SearchBarContainer onSearchInput = {this.props.onSearchInput} />
						<SearchFilterLayout onYearSelect = {this.props.onYearSelect} onCategorySelect = {this.props.onCategorySelect} />
						
						
					</div>
				</div>
			);
	}


	

}



export default SearchLayout;