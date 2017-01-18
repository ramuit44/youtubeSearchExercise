import React, { Component } from 'react';
import VideoItem from '../views/video-item';
import JSONP from 'jsonp';
import { getVideoStatistics } from '../../services/youtubeSearch_service';

/* Stateful container for retriving statiscs for a video  (likes,views) and feeding them to the child compoenent VideoItem 
for rendering*/
class VideoItemContainer extends Component {

	constructor(props){
		super(props); 
		this.state = {
			video : props.video,
			videoWatchCount : '',
			videoLikeCount : ''
		};
	}

  //Load video statistics into the state on component mount
	componentDidMount() {

		const self = this;

	  	const inputValue = this.state.video.id.videoId;
		getVideoStatistics(inputValue,function(error, data){
	      if (error) {
	        console.log(error);
	      } else {
	        
	        self.setState({
	      		videoWatchCount: data.items[0].statistics.viewCount,
	      		videoLikeCount: data.items[0].statistics.likeCount
	    	});
	      }
	    });
	}


	render(){
		/*Call the  stateless VideoItem with corresponding props*/
		return(
				
				<VideoItem video={this.state.video} key={this.state.video.etag} 
				videoWatchCount={this.state.videoWatchCount} videoLikeCount={this.state.videoLikeCount} 
				onVideoSelect={this.props.onVideoSelect} isSaveDisabled={this.props.isSaveDisabled}/>
			);

	 }

}

export default VideoItemContainer;

	