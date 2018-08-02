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
        <div className="rows restaurant_list_tile">
          <div className="medium-4">
            <img src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg"} alt="sample70" />
          </div>
          <div className="medium-8">
            <h2>{this.props.name}</h2>
            <ul>
              <li className="rest-address">{this.props.address}</li>
              {email}
              {website}
            </ul>
            <h4>{this.props.phone_number}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default RestaurantListTile;
