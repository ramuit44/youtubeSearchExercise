import { combineReducers } from 'redux';

// Reducers
import videoReducer from './video-reducer';

// Combine Reducers
var reducers = combineReducers({
    videoState: videoReducer
    
});

export default reducers;