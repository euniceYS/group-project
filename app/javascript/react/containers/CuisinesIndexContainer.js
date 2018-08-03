import React, { Component } from 'react';
import CuisineTile from '../components/CuisineTile';

class CuisinesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisinesArray: []
    };
  }

  componentDidMount() {
      fetch('/api/v1/cuisines')
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
          cuisinesArray: body.cuisines
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let cuisines = this.state.cuisinesArray.map( cuisine => {
      return (
        <CuisineTile
          key={cuisine.id}
          id={cuisine.id}
          name={cuisine.name}
          cuisineImg={cuisine.photo_url}
        />
      );
    });

    return (
      <div className="columns text-center">
        <h1 className="app-title">Effective Fork</h1>
          {cuisines}
      </div>
    );
  }
}

export default CuisinesIndexContainer;
