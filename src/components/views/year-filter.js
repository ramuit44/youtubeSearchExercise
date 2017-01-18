import React, { Component } from 'react';
import SliderItem from "./slider-item.js";
require('../../../style/slider-item.scss');
require('../../../style/year-filter.scss');


/*State less presentation component for displaying the year slider.
  Input parameters are the 
  	onYearSelect: callbackmethod when year in slider is changed.
*/
class YearFilter extends Component {

	constructor(props){
		super(props); 
		this.state = {
            currentValue: 2016,
            min: 2000,
            max: 2017,
            step: 1
        };
	}

	

	render(){

		return (
				
				 <div className="yearSlider">
				 	<div className="col-xs-12 yearLabel">Published Year</div>
				 	<div className="col-xs-12">
						 <b>2000</b>
							 <SliderItem
		            		  id = "horizontalSlider1"
		                      value = { this.state.currentValue }
		                      change = {this.changeValue}
		                      step = { 1 }
		                      max = { this.state.max }
		                      min = { this.state.min }
		                      tooltip="always"
		                      tooltip_position="bottom"
		                       />
		                  <b>2017</b>
	                 </div>
                 </div>   
			);
	}

	changeValue = (event) => {
		this.state.currentValue = event.target.value;
		this.props.onYearSelect(this.state.currentValue);
	}

}

export default YearFilter;