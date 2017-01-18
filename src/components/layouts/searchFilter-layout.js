import React, { Component } from 'react';
import YearFilter from '../views/year-filter';
import CategoryFilterContainer from '../containers/categoryFilter-container';
require('../../../style/search-filter.scss');


//Stateless Component for layouting the YearFilter and CategoryFilterContainer
class SearchFilterLayout extends Component {

	constructor(props){
		super(props); 
	}

	render(){

		return (

				<div className="row filters">
							<div className="col-xs-8"><YearFilter onYearSelect = {this.props.onYearSelect}/></div>
							<div className="col-xs-4"><CategoryFilterContainer onCategorySelect = {this.props.onCategorySelect}/></div>
				</div>	

			);
	}
}
export default SearchFilterLayout;