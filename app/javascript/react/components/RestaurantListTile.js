import React, { Component } from 'react';
import { Link } from 'react-router';

class RestaurantListTile extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let websiteLi;
    let emailLi;

    if (this.props.website != null) {
      websiteLi = <li className="rest-website">{this.props.website}</li>;
    }

    if (this.props.email != null) {
      emailLi = <li className="rest-email">{this.props.email}</li>;
    }

    return (
      <Link to= {`/restaurants/${this.props.id}`}>
        <div className="restaurant_list_tile">
          <div className="medium-4">
            <img src={this.props.photo} alt="" />
          </div>
          <div className="medium-8">
            <h2>{this.props.name}</h2>
            <ul>
              <li className="rest-address">{this.props.address}</li>
              {emailLi}
              {websiteLi}
            </ul>
            <h4>{this.props.phone_number}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default RestaurantListTile;
