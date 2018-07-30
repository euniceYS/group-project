import React, { Component } from 'react';
import RestaurantTile from '../components/RestaurantTile';

class RestaurantShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    };
  }

  componentDidMount() {
    fetch(`/api/v1/restaurants/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        restaurant: body.restaurant
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="colums rows">
        <RestaurantTile
          key={this.state.restaurant.id}
          id={this.state.restaurant.id}
          name={this.state.restaurant.name}
          address={this.state.restaurant.address}
          phone_number={this.state.restaurant.phone_number}
          email={this.state.restaurant.email}
          website={this.state.restaurant.website}
        />
      </div>
    );
  }
}

export default RestaurantShowContainer;
