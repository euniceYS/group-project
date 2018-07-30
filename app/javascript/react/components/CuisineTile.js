import React from 'react';
import { Link } from 'react-router';

const CuisineTile = (props) => {
  return (
    <div>
      <Link to={`/cuisines/${props.id}`}>
        {props.name}
      </Link>
    </div>
  );
};

export default CuisineTile;
