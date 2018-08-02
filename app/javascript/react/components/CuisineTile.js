import React from 'react';
import { Link } from 'react-router';

const CuisineTile = (props) => {
  return (
    <div className="cuisine-tile">
      <img src={props.cuisineImg} alt="sample70" />
      <div className="shadowbox"/>
      <Link to={`/cuisines/${props.id}`}>{props.name}</Link>
    </div>
  );
};

export default CuisineTile;
