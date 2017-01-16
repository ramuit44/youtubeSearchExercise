import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {
	return (

			<ul className="col-md-4 list-group">
				
				{
					//ARRAY MAP RETURN NEW ARRAY WHERE THE NEW ARRAY OBJECTS IS THE RETURN VALUE OF THE FUNCTION PASSED INTO MAP
					props.videos.map((video) =>{
						return <VideoItem video={video} key={video.etag}  onVideoSelect={props.onVideoSelect}/>

					})

				}


			</ul>
		);


};

export default VideoList;
