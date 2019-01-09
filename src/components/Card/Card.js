import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Card = props => {
  const { image, label } = props.recipe;

  const cleanLabel = label.replace('recipes', '');
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <Link to={`/recipes/${label}`} className="card-style">
      <div className="card" style={backgroundImage}>
        {/* <div className="fav-icon">
          <i className="fas fa-heart" />
        </div> */}
        <h3 className="label">{cleanLabel}</h3>
      </div>
    </Link>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired
}