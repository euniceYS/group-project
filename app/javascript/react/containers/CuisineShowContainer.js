import React, { Component } from 'react';
import RestaurantListTile from '../components/RestaurantListTile';
import RestaurantFormContainer from '../containers/RestaurantFormContainer'

class CuisineShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: null,
      restaurantsArray:[],
      restaurantsUpdated: false
    };
    this.updateRestaurantsList = this.updateRestaurantsList.bind(this)

  }

  updateRestaurantsList(updated) {
    let rests = this.state.restaurantsArray
    rests[updated["restaurant"].id] = updated["restaurant"]
    this.setState({restaurantsArray: rests})
  }

  componentDidMount() {
    fetch(`/api/v1/cuisines/${this.props.params.id}`)
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
        name: body.cuisine.name,
        id: body.cuisine.id,
        restaurantsArray: body.cuisine.restaurants
      });
    })
    .catch(error => console.error(`Error in fetch: ${error}`));
  }

  render() {

    let restaurants = this.state.restaurantsArray.map( restaurant => {

      return(
        <RestaurantListTile
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          phone_number={restaurant.phone_number}
          email={restaurant.email}
          website={restaurant.website}
        />
      );
    });

    return (
      <div className="colums rows">
        <h1>{this.state.name}</h1>
        {restaurants}
        <div>
          <RestaurantFormContainer
            cuisine_id={this.state.id}
            updateParent={this.updateRestaurantsList}
          />
        </div>
      </div>

    );
  }
}

export default CuisineShowContainer;
