import React, { Component } from 'react';

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
        hello
      </div>
    );
  }
}

export default RestaurantShowContainer;
