import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

class NavBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <BackButton />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default NavBar;
