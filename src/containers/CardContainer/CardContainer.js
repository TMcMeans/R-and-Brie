import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../../components/Card/Card';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions/index';
import { Error } from '../../components/Error/Error'

class CardContainer extends Component {

  render() {
    const { label, isLoading, recipes, history } = this.props
    // console.log(history.location.pathname)
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

const mapDispatchToProps = dispatch => ({
  fetchRecipes: (label, url) => dispatch(fetchRecipes(label, url)),
  addRecipes: recipes => dispatch(addRecipes(recipes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
