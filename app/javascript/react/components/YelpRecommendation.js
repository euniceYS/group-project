import React from 'react';

const YelpRecommendation = (props) => {

  let recommendations = props.recommendations.map( recommend => {
    return(
      <div>
        <h3>{recommend.name}</h3>
      </div>
    );
  });

  return(
    <div className="row">
      <h2>Recommendations from YELP!</h2>
      {recommendations}
    </div>
  );
};

export default YelpRecommendation;
