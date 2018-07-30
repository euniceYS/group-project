import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CuisinesIndexContainer from '../containers/CuisinesIndexContainer';
import RestaurantReviewFormContainer from '../containers/RestaurantReviewFormContainer'
import NavBar from './NavBar';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={CuisinesIndexContainer} />
        <Route path="restaurants/:restaurant_id/reviews/new" component={RestaurantReviewFormContainer}/>
      </Route>
    </Router>
  );
};

export default App;
