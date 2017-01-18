import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { getAutoSuggestions } from '../../services/youtubeSearch_service';

/* Stateful container for retriving and holding the autosuggested values and holding 
   search term entered in search bar   Invokes the  stateless child compoent
  Autosuggest with the corresponding callbacks*/
class SearchBarContainer extends Component {

	constructor(props){
		super(props); 
		this.state = {searchParams : '',
					  suggestions: [],
					 };
	}

	//render method for the component
	render(){

		// Autosuggest will pass through all these props to the input element.
	    const inputProps = {
	      placeholder: 'Search ',
	      value: this.state.searchParams,
	      onChange: this.onChange,
	      onKeyDown: this.onInputKeyDown
	    };

	    //Using the react Autosuggest library
	    return (
	    			<div>
	    				
	    				<Autosuggest
						        suggestions={this.state.suggestions}
						        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						        onSuggestionSelected={this.onSuggestionSelected}
						        getSuggestionValue={getSuggestionValue}
						        renderSuggestion={renderSuggestion}
						        inputProps={inputProps}
		      				/>
		      		</div>		
				);

	}


	//OnChange callback method called whenever their is changein input in autosuggest box
	onChange = (event, { newValue, method }) => {
			this.setState({
			      searchParams: newValue
			    });
	};

	//Callback Used to handle the normal search scenario without selecting any autosuggest list
	onInputKeyDown = (event) =>{
	  		if(event.key === 'Enter'){
	  			this.props.onSearchInput(this.state.searchParams);
	  		}
	  	}


	//Callback method called whenever a suggetion is picked : entered/clicked
		onSuggestionSelected =  (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
			    this.props.onSearchInput(suggestionValue);
			
		};


	// Autosuggest will call this function every time you need to update suggestions. Use the search parameter to call the 
	// suggest queries API of YouTube
	onSuggestionsFetchRequested = ({ value }) => {

	  	const self = this;

	  	getAutoSuggestions(value,function(error, data){
	      if (error) {
	        console.log(error);
	      } else {
	        const searchResults = data[1];
	        self.setState({
	      		suggestions: searchResults
	    	});
	      }
	    });
	};


	// Autosuggest will call this function every time you need to clear suggestions.
	  onSuggestionsClearRequested = () => {
	    this.setState({
	      suggestions: []
	    });
	};

}

//Method to get the selected suggested value
const getSuggestionValue = suggestion => suggestion[0];


// Use your imagination to render suggestions. For now simple render
const renderSuggestion = suggestion => (
	  <div>{suggestion[0]}</div>
);

export default SearchBarContainer;




