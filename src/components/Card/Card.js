import React from 'react';
import { Link } from 'react-router-dom';

export const Card = props => {
  const { image, label } = props;

  const cleanLabel = label.replace('recipes', '');
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <Link to={`/recipes/${label}`}>
      <div className="card" style={backgroundImage}>
        {/* <div className="fav-icon">
          <i className="fas fa-heart" />
        </div> */}
        <h3 className="label">{cleanLabel}</h3>
      </div>
    </Link>
  );
};
