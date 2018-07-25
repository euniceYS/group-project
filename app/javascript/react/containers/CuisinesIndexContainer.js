import React, { Component } from 'react';
import CuisineTile from '../components/CuisineTile';

class CuisinesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines_array: []
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
          cuisines_array: body.cuisines
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let cuisines = this.state.cuisines_array.map( cuisine => {
      return (
        <CuisineTile
          key={cuisine.id}
          id={cuisine.id}
          name={cuisine.name}
        />
      );
    });

    return (
      <div>
        <h1>Effective Fork</h1>
        {cuisines}
      </div>
    );
  }
}

export default CuisinesIndexContainer;
