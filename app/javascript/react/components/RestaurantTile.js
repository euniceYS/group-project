import React from 'react';
import PhotoDisplay from './PhotoDisplay';

const RestaurantTile = (props) => {
  let website;
  let email;

  if (props.website != null) {
    website = <li className="rest-website">{props.website}</li>;
  }

  if (props.email != null) {
    email = <li className="rest-email">{props.email}</li>;
  }
  return (
    <div>
      <h1>{`${props.name}`}</h1>
      <div className="restaurant_info_box">
        <ul>
          <li className="rest-address">{props.address}</li>
          <li className="rest-phone-number">{props.phone_number}</li>
          {email}
          {website}
        </ul>
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
