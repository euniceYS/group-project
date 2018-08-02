import React from 'react';
import { browserHistory } from 'react-router';

const BackButton = () => {
  return(
    <div
      className="nav-back-button"
      onClick={browserHistory.goBack}
    >
      <i className="fas fa-arrow-circle-left" aria-hidden="true"></i> Back
    </div>
  );
};

export default BackButton;
