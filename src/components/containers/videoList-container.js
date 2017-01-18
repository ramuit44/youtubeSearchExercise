import React, { Component } from 'react';
import VideoListLayout from '../layouts/videoList-layout';
import store from '../../store';
import { getSavedVideos } from '../../actions/video-actions';
import { saveVideo } from '../../actions/video-actions';
import { connect } from 'react-redux';

/* Stateful container for holding the VideoList and handle the saveVideo and getVideos actions from the Redux Store.
   The same container is used for both "search-videos" and "My-videos" display basing on input param fetchSavedVideos
*/
class VideoListContainer extends Component {
	constructor(props){
		super(props); 
}


	render(){

		const fetchSavedVideos = this.props.fetchSavedVideos;
		
		//Call the stateLessVideoListLayout with corresponding parms based on the Tab.
		return(
				<div>

					{fetchSavedVideos ? (
        				<VideoListLayout videos = {this.props.savedVideos} isSaveDisabled={this.props.fetchSavedVideos}/>
      				) : (
        				<VideoListLayout videos = {this.props.videos} onVideoSelect={this.props.onVideoSave}/>
      				)}

				</div>
				
			);

	 }

   	//On component mount , in case of "My Videos" tab , send an action to the store to fecth the videos.
	componentDidMount() {
		if(this.props.fetchSavedVideos)
		{
			store.dispatch(getSavedVideos());
		}
	} 


}

 //for maping the savedVideos from the store to Props.
const mapStateToProps = function(store) {
  return {
    savedVideos: store.videoState.videos
  };
};


//for dispatching action to store upon save video.
const mapDispatchToProps = (dispatch) => {
  return {
    onVideoSave: (video) => {
      dispatch(
      	saveVideo(video)
      )
    }
  }
}	

//connect mapStateToProps and mapDispatchToProps to Container
export default connect(mapStateToProps,mapDispatchToProps)(VideoListContainer);	