import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CuisinesIndexContainer from '../containers/CuisinesIndexContainer';
import NavBar from './NavBar';

const App = props => {

    return (
      <Router history={browserHistory}>
        <Route path='/' component={NavBar} >
          <IndexRoute component={CuisinesIndexContainer} />
        </Route>
      </Router>

    );
  };

export default App;
