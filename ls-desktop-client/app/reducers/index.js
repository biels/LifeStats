// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import typesReducer from './typesReducer';

const rootReducer = combineReducers({
  routing,
  types: typesReducer
});

export default rootReducer;
