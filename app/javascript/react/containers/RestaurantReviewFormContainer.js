import React, { Component } from 'react';
import CuisineTile from '../components/CuisineTile';
import RestaurantReviewForm from '../components/RestaurantReviewForm'

class RestaurantReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewTitle: '',
      reviewBody: '',
      reviewRating: '',
      errors: {}

    };
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleBodyUpdate = this.handleBodyUpdate.bind(this);
    this.handleRatingUpdate = this.handleRatingUpdate.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateReviewTitle = this.validateReviewTitle.bind(this);
    this.validateReviewBody = this.validateReviewBody.bind(this);
    this.validateReviewRating = this.validateReviewRating.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let validTitle = this.validateReviewTitle(this.state.reviewTitle)
    let validBody = this.validateReviewBody(this.state.reviewBody)
    let validRating = this.validateReviewRating(this.state.reviewRating)

    if (validTitle && validBody && validRating){
      let formPayLoad = {
        title: this.state.reviewTitle,
        body: this.state.reviewBody,
        rating: this.state.reviewRating,
        restaurant_id: this.props.params.restaurant_id
      };
      this.submitReview(formPayLoad);
    }
  }

  validateReviewTitle(selection) {
    if (selection.trim() === '') {
      let newError = { reviewTitle: 'You must enter a Title!' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewTitle;
      this.setState({ errors: errorState })
      return true
    }
  }

  validateReviewBody(selection) {
    if (selection.trim() === '') {
      let newError = { reviewBody: 'You must enter a Description!' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewBody;
      this.setState({ errors: errorState })
      return true
    }
  }

  validateReviewRating(selection) {
    if (selection.trim() === '') {
      let newError = { reviewRating: 'You must enter a Rating!' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewRating;
      this.setState({ errors: errorState })
      return true
    }
  }


  submitReview(payload) {
    let data = JSON.stringify(payload)
    fetch(`/api/v1/reviews`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data
    }).then(response => {response
      if (response.ok) {
        return response
      } else if (response.status == 422){
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    }).then(response => {
      if (response.status == 422) {
        console.log("422 code")
        return response.json()
      } else {
        console.log("Implement Redirect")
      }
    }).then(parsedBody => {
      this.setState({ errors: Object.assign(this.state.errors, parsedBody.errorList) })
      console.log(parsedBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleTitleUpdate(event) {
    this.setState  ({
      reviewTitle: event.target.value
    })
  }

  handleBodyUpdate(event) {
    this.setState  ({
      reviewBody: event.target.value
    })
  }

  handleRatingUpdate(event) {
    this.setState  ({
      reviewRating: event.target.value
    })
  }

  render() {

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="alert-box alert round">{errorItems}</div>

    }

    return (
      <div>
      <h1>Restaurant Review Form</h1>
      {errorDiv}
      <RestaurantReviewForm
        handleFormSubmit = {this.handleFormSubmit}
        handleTitleUpdate = {this.handleTitleUpdate}
        handleBodyUpdate = {this.handleBodyUpdate}
        handleRatingUpdate = {this.handleRatingUpdate}
      />
      </div>
    );
  }
}

export default RestaurantReviewFormContainer;
