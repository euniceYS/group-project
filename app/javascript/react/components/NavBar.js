import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <BackButton />
          <Link to='/'> HOME </Link>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default NavBar;
