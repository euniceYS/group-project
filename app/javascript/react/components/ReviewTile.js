import React from 'react';

const ReviewTile = (props) => {

  return(
    <div className="colums rows review">
      <hr />
      <h5 className="review-title">{props.title}</h5>
      {props.body}
      <li className="review-username">Username: {props.user}</li>
      <li className="review-date">{props.created_date}</li>
      <li className="review-rating">Rating: {props.rating}</li>
      <hr />
    </div>
  );
};

export default ReviewTile;
