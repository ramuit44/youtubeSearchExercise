import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';


require('../../style/search-bar.scss');



// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Clm',
    year: 2012
  },
  
];


// Teach Autosuggest how to calculate suggestions for any given input value.
	const getSuggestions = value => {
	  	const inputValue = value.trim().toLowerCase();
	  	const inputLength = inputValue.length;

	  	/*axios.get('http://suggestqueries.google.com/complete/search?client=firefox&q=top+so')
  		.then(function(response){
    			console.log(response.data); 
    			console.log(response.status); 
  		});



		  axios({
		  method: 'get',
		  url: 'https://clients1.google.com/complete/search?client=youtube&hl=en&gl=au&origin=*&sugexp=ytd4_arm_2&gs_rn=23&gs_ri=youtube&tok=MuDr9nGw42YTLXNMj3NGrg&ds=yt&cp=6&gs_id=c&q=CATS11&callback=google.sbox.p50&gs_gbg=XE3P45JVGQFppGP',
		  dataType: 'jsonp'
		}).then(function(response){
    			console.log(response.data); 
    			console.log(response.status); 
  		});  */




  		fetch('http://suggestqueries.google.com/complete/search?client=firefox&q=top+so', {
    		method: 'get',
    		mode: 'no-cors',
		}).then(function(response) {
		    return response.json()
		  }).then(function(json) {
		    console.log('parsed json', json)
		  }).catch(function(ex) {
		    console.log('parsing failed', ex)
		  });


	  	return inputLength === 0 ? [] : languages.filter(lang =>
	    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  		);
	};


	const getSuggestionValue = suggestion => suggestion.name;


	// Use your imagination to render suggestions.
	const renderSuggestion = suggestion => (
	  <div>
	    {suggestion.name}
	  </div>
	);


	const renderInputComponent = inputProps => (
	  <div className="inputContainer">
	    <input {...inputProps} />
	  </div>
	);



class SearchBar extends Component {

	constructor(props){
		super(props); 
		this.state = {searchParams : '',
					  suggestions: [],
					  keyPressed : ''};
	}

	
	render(){


		// Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a programming language',
      value: this.state.searchParams,
      onChange: this.onChange
    };


		return (
				<div className="search-bar">
					<input onChange={this.onInputChange} placeholder="Search for your Super Villan"/>

					<Autosuggest
				        suggestions={this.state.suggestions}
				        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				        getSuggestionValue={getSuggestionValue}
				        renderSuggestion={renderSuggestion}
				        inputProps={inputProps}
      				/>
					

				</div>
			);
	}


	onChange = (event, { newValue }) => {
    this.setState({
      searchParams: newValue
    });
  };


	onInputChange = (event) => {
		this.setState({searchParams :event.target.value});
		this.props.onSearchTermChange(this.state.searchParams);
	}


   // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };


  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


	
	








}

export default SearchBar;