import React from 'react';
import TextField from './TextField';
import TextArea from './TextArea';
import DropDownInput from './DropDownInput';

const RestaurantReviewForm = (props) => {
  return (
    <form className="row callout" onSubmit={props.handleFormSubmit}>
      <TextField
        label='Add Review Title'
        name='title'
        value={props.titleValue}
        handlerFunction={props.handleTitleUpdate}
      />
      <TextArea
        content='Write a review'
        label='Add Review'
        name='body'
        value={props.bodyValue}
        handlerFunction={props.handleBodyUpdate}
      />
      <DropDownInput
        label='Add Rating'
        name='ratings'
        value={props.ratingValue}
        handlerFunction={props.handleRatingUpdate}
        />
      <input className="submit-button" type="submit" value="Add Review" />
    </form>
  );
};

export default RestaurantReviewForm;
