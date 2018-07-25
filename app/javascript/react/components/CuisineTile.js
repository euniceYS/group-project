import React, { Component } from 'react';
import { Link } from 'react-router';

class CuisineTile extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Link to={`/cuisines/${this.props.id}`}>
            {this.props.name}
        </Link>
      </div>
    );
  }
}

export default CuisineTile;
