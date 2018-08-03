import React from 'react';

const ReviewTile = (props) => {

  return(
    <div className="review">
      <hr />
      <h5 className="review-title">{props.title}</h5>
      <p>{props.body}</p>
      <ul className="review-info">
        <li className="review-username"><i className="fas fa-user-astronaut"></i>: <em>{props.user}</em></li>
        <li className="review-date"><i className="far fa-calendar"></i>: {props.created_date}</li>
        <li className="review-rating"><i className="fas fa-star"></i>: {props.rating}</li>
      </ul>
    </div>
  );
};

export default ReviewTile;
