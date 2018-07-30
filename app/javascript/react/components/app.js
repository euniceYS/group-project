import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CuisinesIndexContainer from '../containers/CuisinesIndexContainer';
import CuisineShowContainer from '../containers/CuisineShowContainer';
import RestaurantShowContainer from '../containers/RestaurantShowContainer';
import NavBar from './NavBar';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={CuisinesIndexContainer} />
        <Route path='/cuisines/:id' component={CuisineShowContainer} />
        <Route path='/restaurants/:id' component={RestaurantShowContainer} />
      </Route>
    </Router>
  );
};

export default App;
