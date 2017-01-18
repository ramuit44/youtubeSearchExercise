import React, { Component } from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import VideoListContainer from '../containers/videoList-container';
require('../../../style/tabs-layout.scss');


//Stateless Component for layouting Tabs and calling VideoListContainer with parms correponding to tabs.
class TabsLayout extends Component {	
    constructor(props){
		super(props); 
	}

	render () {
        //Onselect of the tab, inform the parent component on selectedTabIndex. 
        //Used for dynamic focusing the "search videos" tab when the search Container is used, irrespective of which tab we are in.
		return(

				<div className="container">
						 <Tabs activeKey={this.props.activeTab} id="tab-example" onSelect={(index, label) => this.props.onTabSelect(index)}>
    						<Tab eventKey={1} title="Search Videos">
    							<div className="container">
    								<VideoListContainer videos = {this.props.videos} />
    							</div>	
    						</Tab>
    						<Tab eventKey={2} title="My Videos">
    							<div className="container">
    								<VideoListContainer fetchSavedVideos="true" />
    							</div>

    						</Tab>
    					 </Tabs>
				</div>
			);
	}
}

export default 	TabsLayout;

