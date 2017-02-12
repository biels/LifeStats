// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import HomePage from './containers/Pages/HomePage/HomePage';
import TrackPage from './containers/Pages/TrackPage/TrackPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/track" component={TrackPage} />
  </Route>
);
