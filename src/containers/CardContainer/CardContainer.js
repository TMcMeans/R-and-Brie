import React from 'react';
import { connect } from 'react-redux';

import { Card } from '../../components/Card/Card';

export const CardContainer = ({ recipes }) => {
  const recipeCards = recipes.map(recipe => {
    return <Card {...recipe} key={recipe.label} />;
  });

  return <div className="card-container">{recipeCards}</div>;
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(CardContainer);
