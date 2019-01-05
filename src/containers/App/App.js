import React, { Component } from 'react';
import { connect } from 'react-redux';
import { app_key, app_id } from '../../apikey';
import { Switch, Route, Redirect, withRouter } from 'react-router';

import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions';
import * as Helper from '../../helper/helper';
import '../../styles/main.scss';

import { Header } from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';

class App extends Component {
  async componentDidMount() {
    const recipes = Helper.getFromLocalStorage();
    if (!recipes) {
      const url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=brie`;
      this.props.fetchRecipes(url);
    } else {
      this.props.addRecipes(recipes);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/recipes" component={CardContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: url => dispatch(fetchRecipes(url)),
  addRecipes: recipes => dispatch(addRecipes(recipes))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
