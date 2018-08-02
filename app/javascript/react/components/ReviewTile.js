import React from 'react';

const ReviewTile = (props) => {
  let adminDeleteButton;

  if(window.currentUser && window.currentUser.admin){
    adminDeleteButton = <button data-review-id={props.id} className="button tiny" onClick={props.onDelete}>Delete</button>
  }

  return(
    <div className="colums rows review">
      <hr />
      <h5 className="review-title">{props.title}</h5>
      {props.body}
      <li className="review-username">Username: {props.user}</li>
      <li className="review-date">{props.created_date}</li>
      <li className="review-rating">Rating: {props.rating}</li>
      <hr />

      <div>
        {adminDeleteButton}
      </div>
    </div>
  );
};

export default ReviewTile;
