// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import typesReducer from './typesReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  routing,
  session: sessionReducer,
  types: typesReducer
});

export default rootReducer;
