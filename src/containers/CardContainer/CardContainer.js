import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../../components/Card/Card';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions/index';
import { Error } from '../../components/Error/Error'

class CardContainer extends Component {

  render() {
    const { label, isLoading, recipes } = this.props
    const recipeCards = recipes.map(recipe => {
      return <Card recipe={recipe} key={recipe.label} />;
    });
    if (!label) {
      return <Error />;
    } else if (isLoading) {
      return <div>Loading</div>
    } else {
      return (<div className="card-container">{recipeCards}</div>)
    }
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps
)(CardContainer);
