import React from 'react';

export const Card = props => {
  const {
    calories,
    dietLabels,
    healthLabels,
    image,
    ingrientLines,
    label,
    source,
    url,
    yields
  } = props;

  const cleanLabel = label.replace('recipes', '');
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className="card" style={backgroundImage}>
      <div className="fav-icon">
        <i className="fas fa-heart" />
      </div>
      <h3 className="label">{cleanLabel}</h3>
    </div>
  );
};
