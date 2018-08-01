import React, { Component } from 'react';
import RestaurantTile from '../components/RestaurantTile';
import RestaurantReviewFormContainer from './RestaurantReviewFormContainer';

class RestaurantShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      reviews: []
    };
    this.submitReview = this.submitReview.bind(this);
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
        restaurant: body.restaurant,
        reviews: body.restaurant.reviews
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  submitReview(payload) {
    console.log("above the fetch");
    let data = JSON.stringify(payload);
    fetch(`/api/v1/reviews`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    })
    .then(response => { response
      if (response.ok) {
        return response;
      } else if (response.status == 422) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(parsedBody => {
      if (parsedBody.errorList) {
        console.log(parsedBody);
        this.setState({ errors: Object.assign(this.state.errors, parsedBody.errorList) });
      } else {
        console.log("SUCCESS");
        console.log(parsedBody);
        this.setState({reviews: this.state.reviews.concat(parsedBody.review)});
      }
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
          reviews={this.state.reviews}
        />
        <RestaurantReviewFormContainer
          id={this.state.restaurant.id}
          submitReview={this.submitReview}
        />
      </div>
    );
  }
}

export default RestaurantShowContainer;
