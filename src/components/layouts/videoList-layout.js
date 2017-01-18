import React from 'react';
import VideoItemContainer from '../containers/videoItem-container';
//require('../../../style/video-list.scss');

				
/*Stateless component for rending the VideoItems by calling the VideoItemContainer. The component iterates through supplied
  videos and calls the VideoItemContainer for each entry in iteration*/
const VideoListLayout = (props) => {

	const hasVideos = (props.videos && props.videos.length > 0) ;

	return (

					<div className="list-container">
						{hasVideos ? (
								<section className="col-xs-12 col-sm-6 col-md-12">
									{
										//ARRAY MAP RETURN NEW ARRAY WHERE THE NEW ARRAY OBJECTS IS THE RETURN VALUE OF THE FUNCTION PASSED INTO MAP
										props.videos.map((video) =>{
											return <VideoItemContainer video={video} key={video.etag}  onVideoSelect={props.onVideoSelect} isSaveDisabled={props.isSaveDisabled}/>

										})

									}
								</section>
							) : (
        						<span>No Results.</span>
      					)}
      				</div>
		);
};

export default VideoListLayout;
