import React, { Component } from 'react';
import RestaurantListTile from '../components/RestaurantListTile';
import RestaurantFormContainer from '../containers/RestaurantFormContainer';
import YelpRecommendation from '../components/YelpRecommendation';

class CuisineShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: null,
      restaurantsArray:[],
      restaurantsUpdated: false,
      yelpRecommendation:[]
    };
    this.updateRestaurantsList = this.updateRestaurantsList.bind(this);

  }

  updateRestaurantsList(newRestaurant) {
    this.setState({restaurantsArray: this.state.restaurantsArray.concat([newRestaurant.restaurant])});
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
        restaurantsArray: body.cuisine.restaurants,
        yelpRecommendation: body.cuisine.yelp_recommendation.businesses
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
          photo={restaurant.photo}
        />
      );
    });

    return (
      <div className="row">
        <h1 className="page-title">{this.state.name}</h1>
        {restaurants}
        <YelpRecommendation
        recommendations={this.state.yelpRecommendation}
        />
        <RestaurantFormContainer
          cuisine_id={this.state.id}
          updateRestaurantsList={this.updateRestaurantsList}
          />
      </div>
    );
  }
}

export default CuisineShowContainer;
