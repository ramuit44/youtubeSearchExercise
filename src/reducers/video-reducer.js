import * as types from '../actions/action-types';
const initialState = {
  videos: [
  ]
};

/*Two actions "GET_SAVED_VIDEOS" for retirving the list of saved videos from store 
and "SAVE_VIDEO" for saving the video to the store*/

const videoReducer = function(state = initialState, action) {

	switch(action.type) {

		case types.GET_SAVED_VIDEOS:
      				return Object.assign({}, state, { videos: action.videos });

      	case types.SAVE_VIDEO:

      				const newVideos = [...state.videos,action.video];
      				return Object.assign({}, state, { videos: newVideos });

    }

   return state;
    
}

export default videoReducer;

