import { renderComponent , expect } from '../test_helper';
import VideoItem from '../../src/components/views/video-item';

describe('VideoItem' , () => {
  let component;

  beforeEach(() => {
  	 let video = {
		   "kind": "youtube#searchResult",
		   "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/5e8ybGg0m48UPmcwlI9Z_XQfdKw\"",
		   "id": {
		    "kind": "youtube#video",
		    "videoId": "c-WJ-E42aME"
		   },
		   "snippet": {
		    "publishedAt": "2017-01-07T07:29:57.000Z",
		    "channelId": "UCVqvZyXLgMpvTq4pLLyuc2A",
		    "title": "Salman khan thrown out Swami om - Bigg Boss 10 House",
		    "description": "Salman khan thrown out Swami om - Bigg Boss 10 House.",
		    "thumbnails": {
		     "default": {
		      "url": "https://i.ytimg.com/vi/c-WJ-E42aME/default.jpg",
		      "width": 120,
		      "height": 90
		     },
		     "medium": {
		      "url": "https://i.ytimg.com/vi/c-WJ-E42aME/mqdefault.jpg",
		      "width": 320,
		      "height": 180
		     },
		     "high": {
		      "url": "https://i.ytimg.com/vi/c-WJ-E42aME/hqdefault.jpg",
		      "width": 480,
		      "height": 360
		     }
		    },
		    "channelTitle": "Lok Rang Audio",
		    "liveBroadcastContent": "none"
		   }
  };

    component = renderComponent(VideoItem,{"video":video});
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
