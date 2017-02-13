import { applyMiddleware, createStore } from 'redux';
import {AppReducers} from './reducers/app-reducers';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware = applyMiddleware(promise(),logger());
const store = createStore(AppReducers,middleware);


store.subscribe(()=>{
   // console.log(store.getState());
})

export default store;