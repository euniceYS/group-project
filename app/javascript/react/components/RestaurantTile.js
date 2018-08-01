import React from 'react';
import PhotoDisplay from './PhotoDisplay';
import PhotoDisplay from './ReviewTile';

const RestaurantTile = (props) => {
  let website;
  let email;
  let result;

  if (props.website != null) {
    website = <li className="rest-website">{props.website}</li>;
  }

  if (props.email != null) {
    email = <li className="rest-email">{props.email}</li>;
  }

   if (props.reviews != null) {
    result = props.reviews.map(review => {
      return(
        <ReviewTile
          key = {review.id}
          id = {review.id}
          user = {review.user}
          created_date = {review.created_date}
          rating = {review.rating}
          title = {review.title}
          body = {review.body}
        />
      );
    });
   }

  return (
    <div className="rows columns">
      <h1>{`${props.name}`}</h1>
      <div className="restaurant_info_box">
        <ul>
          <li className="rest-address">{props.address}</li>
          <li className="rest-phone-number">{props.phone_number}</li>
          {email}
          {website}
        </ul>
        {result}
      </div>
      <PhotoDisplay
        photos={props.photos}
        cssClass={"restaurant_photos"}
        modelName={"restaurant"}
      />
    </div>
  );
};

export default RestaurantTile;
