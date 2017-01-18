import {loadStateFromStorage, saveStateToStorage} from './services/localStorage_service';
import * as types from './actions/action-types';

//Middleware to handle the functionality of saving to local storage and reteriving from local storage for the given actions
export const videoMiddleware = store => next => action => {
  if (action.type === types.GET_SAVED_VIDEOS) {
  	var videos = loadStateFromStorage();
  	console.log(videos);
    action.videos = videos;
  } else if (action.type === types.SAVE_VIDEO) {
    saveStateToStorage(action.video);
  }
  next(action);
};

