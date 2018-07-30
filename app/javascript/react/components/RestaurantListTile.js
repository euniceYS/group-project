import React, { Component } from 'react';
import { Link } from 'react-router';

class RestaurantListTile extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let website;
    let email;

    if (this.props.website != null) {
      website = <li className="rest-website">{this.props.website}</li>;
    }

    if (this.props.email != null) {
      email = <li className="rest-email">{this.props.email}</li>;
    }

    return (
      <Link to= {`/restaurants/${this.props.id}`}>
        <div className="rows columns restaurant_list_tile">
          <h2>{this.props.name}</h2>
          <ul>
            <li className="rest-address">{this.props.address}</li>
            {email}
            {website}
          </ul>
          <h4>{this.props.phone_number}</h4>
        </div>
      </Link>
    );
  }
}

export default RestaurantListTile;
