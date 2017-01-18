import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import {videoMiddleware} from './middleware';

//Redux store with reducers and Middlewares
const middleware = applyMiddleware(videoMiddleware);

const store = createStore(reducers,middleware);

export default store;