import React, { Component } from 'react';
require('../../../style/video-item.scss');

/*State less presentation component for displaying the each video entry of the search result .
  Input parameters are the 
  	isSaveDisabled: if save should be allowed across each entry. 
  	videos: list of videos
  	onVideoSelect : onvideoSave callbaclk
*/
class VideoItem extends Component {	

    constructor(props){
		super(props); 
	}


	render(){

		const video = this.props.video;
		let saveButton = null;
		if(!this.props.isSaveDisabled) {
			saveButton = <span className="plus"><a title="Save" onClick={() => this.props.onVideoSelect(video)}><i className="glyphicon glyphicon-plus"></i></a></span>;
		}

				return (



						<article className="search-result row">
							<div className="col-xs-12 col-sm-12 col-md-3">
								<a href="#" title="Lorem ipsum" className="thumbnail"><img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} /></a>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-2">
								<ul className="meta-search">
									<li>
										<i className="glyphicon glyphicon-calendar"></i> 
										<span>
											{new Date(video.snippet.publishedAt).toLocaleDateString()}
										</span>
									</li>
									<li><i className="glyphicon glyphicon-thumbs-up"></i> <span>{this.props.videoLikeCount}</span></li>
									<li><i className="glyphicon glyphicon-user"></i> <span>{video.snippet.channelTitle}</span></li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-7 excerpet">
								<h3><a href="#" title="">{video.snippet.title}</a></h3>
								<p>{video.snippet.description}</p>
								<p className="nowrap statistics">{this.props.videoWatchCount} views</p>
								{saveButton}
							</div>
							<span className="clearfix borda"></span>
						</article>			

					);
	};	


}

export default VideoItem;