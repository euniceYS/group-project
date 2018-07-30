import React from 'react'
import TextField from './TextField'
import TextArea from './TextArea'

const RestaurantReviewForm = (props) => {
  return (
    <form className="callout" onSubmit={props.handleFormSubmit}>
    <TextField
      label='Add Review Title'
      name='title'
      handlerFunction={props.handleTitleUpdate}
      />
    <TextArea
      content='Write a review'
        label='Add Review'
        name='body'
        handlerFunction={props.handleBodyUpdate} // will become our onChange function
      />
      <TextField
        label='Add Rating'
        name='ratings'
        handlerFunction={props.handleRatingUpdate}
        />
      <input type="submit" value="Add Review" />
      </form>
  )
}

export default RestaurantReviewForm;
