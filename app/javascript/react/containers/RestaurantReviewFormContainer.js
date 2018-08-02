import React, { Component } from 'react';
import CuisineTile from '../components/CuisineTile';
import RestaurantReviewForm from '../components/RestaurantReviewForm';

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
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateReviewTitle = this.validateReviewTitle.bind(this);
    this.validateReviewBody = this.validateReviewBody.bind(this);
    this.validateReviewRating = this.validateReviewRating.bind(this);
  }

  handleClearForm(event) {
    this.setState({
      reviewTitle: '',
      reviewBody: '',
      reviewRating: '',
      errors: {}
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let validTitle = this.validateReviewTitle(this.state.reviewTitle);
    let validBody = this.validateReviewBody(this.state.reviewBody);
    let validRating = this.validateReviewRating(this.state.reviewRating);

    if (validTitle && validBody && validRating){
      let formPayLoad = {
        title: this.state.reviewTitle,
        body: this.state.reviewBody,
        rating: this.state.reviewRating,
        restaurant_id: this.props.id
      };
      this.props.submitReview(formPayLoad);
      this.handleClearForm(event);
    }
  }

  validateReviewTitle(selection) {
    if (selection.trim() === '') {
      let newError = { reviewTitle: 'You must enter a Title!' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.reviewTitle;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateReviewBody(selection) {
    if (selection.trim() === '') {
      let newError = { reviewBody: 'You must enter a Description!' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.reviewBody;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateReviewRating(selection) {
    if (selection.trim() === '') {
      let newError = { reviewRating: 'You must enter a Rating!' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.reviewRating;
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleTitleUpdate(event) {
    this.setState  ({
      reviewTitle: event.target.value
    });
  }

  handleBodyUpdate(event) {
    this.setState  ({
      reviewBody: event.target.value
    });
  }

  handleRatingUpdate(event) {
    this.setState  ({
      reviewRating: event.target.value
    });
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>);
      });
      errorDiv = <div className="alert-box alert round">{errorItems}</div>;
    }

    return (
      <div className="rows columns wrapper">
      <h3 className="form-title">Restaurant Review Form</h3>
      {errorDiv}
      <RestaurantReviewForm
        titleValue = {this.state.reviewTitle}
        bodyValue = {this.state.reviewBody}
        ratingValue = {this.state.reviewRating}
        handleFormSubmit = {this.handleFormSubmit}
        handleClearForm = {this.handleClearForm}
        handleTitleUpdate = {this.handleTitleUpdate}
        handleBodyUpdate = {this.handleBodyUpdate}
        handleRatingUpdate = {this.handleRatingUpdate}
      />
      </div>
    );
  }
}

export default RestaurantReviewFormContainer;
