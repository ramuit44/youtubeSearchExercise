import _ from 'lodash';
import React,{Component} from 'react';
import SearchContainer from './components/containers/search-container';
import TabsLayout from './components/layouts/tabs-layout';
import { doVideoSearch } from './services/youtubeSearch_service';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {videos:[],activeTab:1};
		this.videoSearchService({term:'Galactus'});

	}


	videoSearchService(searchObject){
		const self = this;
  		doVideoSearch(searchObject, function(error, data){
	      	if (error) {
	        	console.log(error);
	      	} else {

	      		self.setState({
		      		videos : data.items,
					activeTab: 1
		    	});
	        }
    	});

	}

	
	render () {

		const videoSearch = _.debounce((searchObject) => {this.videoSearchService(searchObject)}, 400);

		return (
				<div className="container col-xs-11">
					<SearchContainer onSearchTermChange = {videoSearch} />
					<TabsLayout videos={this.state.videos} activeTab={this.state.activeTab} onTabSelect={(index) => this.setState({activeTab:index})}/>
				</div>
			);
		}

}


export default App;




