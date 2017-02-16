// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';


const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, promiseMiddleware, router);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer); // eslint-disable-line
}
