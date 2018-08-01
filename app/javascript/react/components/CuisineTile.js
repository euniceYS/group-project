import React from 'react';
import { Link } from 'react-router';

const CuisineTile = (props) => {
  return (
    <div className="cuisine-tile">
      <img src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg"} alt="sample70" />
      <div className="shadowbox"/>
      <Link to={`/cuisines/${props.id}`}>{props.name}</Link>
    </div>
  );
};

export default CuisineTile;
