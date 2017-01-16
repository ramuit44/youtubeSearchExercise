import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAUMMuY_TN3D1bQRxhBDw-TgqUZU8tKkkM';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {videos:[], selectedVideo:null};
		this.videoSearchService('Galactus');

	}


	videoSearchService(term){

		YTSearch(
		{
			key : API_KEY,
			term : term
		},

		(videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]

			});

			
		}

		);

	}

	videoSelectCallback = (selectedVideo) => {
		this.setState({selectedVideo:selectedVideo});
	}

	render () {

		const videoSearch = _.debounce((term) => {this.videoSearchService(term)}, 400);

		return (
			<div className="col-xs-12">
				<SearchBar onSearchTermChange = {videoSearch} />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList videos = {this.state.videos} onVideoSelect={this.videoSelectCallback}/>
			</div>
			);
		}

}


ReactDOM.render(<App />,document.querySelector('.container'));
