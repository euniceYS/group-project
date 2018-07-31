import React from 'react';

const PhotoTile = (props) => {
  if (props.photo_object != null) {
    if (props.size == "thumb") {
      return(
        <img key={props.photo_object.id} className={props.cssClass} src={props.photo_object.restaurant_photo.thumb.url}/>
      )
    } else if (props.size == "medium") {
      return (
        <img key={props.photo_object.id} className={props.cssClass} src={props.photo_object.restaurant_photo.medium.url}/>
      )
    } else {
      return (
        <img key={props.photo_object.id} className={props.cssClass} src={props.photo_object.restaurant_photo.large.url}/>
      )
    }
  } else {
    return (<div/>)
  }
};

export default PhotoTile;
