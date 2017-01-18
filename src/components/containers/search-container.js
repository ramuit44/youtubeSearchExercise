import React, { Component } from 'react';
import SearchLayout from '../layouts/search-layout';

/* Stateful container for holding the search term entered in search bar,
  selected Category in the filter, selected year in the slider. Invokes the  stateless child compoent
  SearchLayout with the corresponding callbacks*/
class SearchContainer extends Component {

	//State will contain the category Selected, search String and Year selected
	constructor(props){
		super(props); 
		this.state = {searchParams : '',
					  category: '',
					  year: '',
					 };
	}


	
	render(){
		/* Call the stateless SearchLayout with search terms and filter callbacks */
		return (

				<SearchLayout 
								onSearchInput = {this.onSearchInputCallback} 
								onYearSelect = {this.onYearSelectCallback} 
								onCategorySelect = {this.onCategorySelectCallback}
				/>				

			);

	}	
	
	//Callback method in the parent called by child component SearchLayout when user selects year in the slider filter				
	onYearSelectCallback = (yearSelected) => {
		//Whenever year select input in the container happens (call up the component Tree chain), 
		//i.e, call the parent Callbackmethod to perform the Search and render results.
		this.props.onSearchTermChange({
				term:this.state.searchParams,
				year:yearSelected,
				category: this.state.category
				}
			);

		this.setState({
			year: yearSelected
		});
	}

    //Callback method in the parent called by child component SearchLayout when category is selected in the filter	
	onCategorySelectCallback = (categorySelected) => {
		//Whenever category select in the category container happens (call up the component Tree chain), 
		//i.e, call the parent Callbackmethod to perform the Search and render results.
		this.props.onSearchTermChange({
				term:this.state.searchParams,
				year:this.state.year,
				category: categorySelected
				}
			);

		this.setState({
			category: categorySelected
		});
	}


	/* Callback method in the parent called by child component SearchLayout when a search term is either entered or 
	selected in the Search bar */
	onSearchInputCallback = (searchTerm)  => {
		//Whenever serach term input in the search bar container happens (call up the component Tree chain), 
		//i.e, call the parent Callbackmethod to perform the Search and render results.
		this.props.onSearchTermChange({
				term:searchTerm,
				year:this.state.year,
				category: this.state.category
				}
			);

		this.setState({
			searchParams: searchTerm
		});
	}
	

}

export default SearchContainer;