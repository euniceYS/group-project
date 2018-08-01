import React from 'react';
import PhotoTile from './PhotoTile'

const PhotoDisplay = (props) => {
  
  let images = ""
  if (props.photos != null) {
    images = props.photos.map(photo => {
      return(
        <PhotoTile 
          key={photo.id}
          photo_object={photo}
          cssClass={props.cssClass}
          size={"medium"}
        />
      )
    })
  }   
  
  return (
      <div className={props.cssClass}>
        <h3>Photos</h3>
        <div>
          {images}
      </div>
      </div>
  );
};

export default PhotoDisplay;
