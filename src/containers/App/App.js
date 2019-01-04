import React, { Component } from 'react';
import { connect } from 'react-redux';
import { app_key, app_id } from '../../apikey';

import { fetchRecipes } from '../../thunks/fetchRecipes';
import * as Helper from '../../helper/helper';

class App extends Component {
  async componentDidMount() {
    const recipes = Helper.getFromLocalStorage();
    if (!recipes) {
      console.log('fetching recipe data');
      const url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=brie`;
      this.props.fetchRecipes(url);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>R and BRIE</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: url => dispatch(fetchRecipes(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
