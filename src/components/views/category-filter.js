import React, { Component } from 'react';
import { DropdownButton,MenuItem,ButtonToolbar } from 'react-bootstrap';
require('../../../style/category-filter.scss');

//Stateless Presentation compoenet for rending the Category dropdown. Input parmeters are title, categories list
class CategoryFilter extends Component {
	constructor(props){
		super(props); 
	}

	render(){

		return (
				<ButtonToolbar>
      				<DropdownButton title={this.props.title} bsSize="large" id="dropdown-size-large"  onSelect={this.onDropDownSelect}>
	      				{
	      					this.props.categories.map((category) =>{
	      						var eventkeyObject = {title:category.snippet.title,id:category.id};
	      						return <MenuItem eventKey={eventkeyObject} key={category.id}>{category.snippet.title}</MenuItem>
							})

						}
      				</DropdownButton>
    			</ButtonToolbar>
			);
	}


	onDropDownSelect = (eventKey, event) => {
		this.props.onValueSelect(eventKey);
	}
	
}

export default CategoryFilter;