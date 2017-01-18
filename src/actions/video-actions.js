import * as types from '../actions/action-types';

export function getSavedVideos() {
  return {
    type: types.GET_SAVED_VIDEOS
    
  };
}


export function saveVideo(video) {
  return {
    type: types.SAVE_VIDEO,
    video
  };
}