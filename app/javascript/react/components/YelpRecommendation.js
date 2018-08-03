import React from 'react';
import { Link } from 'react-router';

const YelpRecommendation = (props) => {

  let recommendations = props.recommendations.map( recommend => {
    return(
      <div className="yelp-recommend">
        <a href={recommend.url} target="_blank"><span>{recommend.name}</span><i className="fab fa-yelp"></i></a>
        <ul>
          <li><i className="fas fa-mobile-alt"></i>: {recommend.display_phone}</li>
          <li><i className="fas fa-star"></i>: {recommend.rating}</li>
          <li>{recommend.price}</li>
        </ul>
        <hr />
      </div>
    );
  });

  return(
    <div className="columns small-4 yelp">
      <h2>Recommendations from YELP</h2>
      {recommendations}
    </div>
  );
};

export default YelpRecommendation;
