import React, { Component } from 'react';
import { getCategoryList } from '../../services/youtubeSearch_service';
import CategoryFilter from '../views/category-filter';

// Stateful container for retriving and holding the Video Categories and invoking stateless child component CategoryFilter
class CategoryFilterContainer extends Component {

	//State will contain the list of categories and title to display the selected value on the dropdown menu
	constructor(props){
		super(props); 
		this.state = {
					  title: ' Select Category ',
					  categories: []
					};
	}

	//Load categories into the state on component mount
	componentDidMount() {

		const self = this;

		getCategoryList(function(error, data){
	      if (error) {
	        console.log(error);
	      } else {
	        
	        self.setState({
	      		categories: data.items
	    	});
	      }
	    });
 	
	}


	render(){
		/* Call the stateless CategoryFilter with OnSelectCallback , Categories list and title */
		return (
				
				<CategoryFilter onValueSelect = {this.onValueSelectCallback} categories={this.state.categories} title={this.state.title}/>
			);
	}

	//Callback method in the parent called by child component CategoryFilter when user selects a value in the dropdown
	onValueSelectCallback = (categoryObj) => {
		this.setState({
			title:categoryObj.title
		});

		//Whenever valueSelect in the category container happens (call up the component Tree chain), 
		//i.e, call the parent Callbackmethod to perform the Search and render results.
		this.props.onCategorySelect(categoryObj.id);
	}

}

export default CategoryFilterContainer;