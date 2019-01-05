import React, { Component } from 'react';
import { connect } from 'react-redux';
import { app_key, app_id } from '../../apikey';
import { Switch, Route, Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { fetchRecipes } from '../../thunks/fetchRecipes';
import * as Helper from '../../helper/helper';
import '../../styles/main.scss';

import { Header } from '../Header/Header';
import Nav from '../Nav/Nav';

class App extends Component {
  async componentDidMount() {
    const recipes = Helper.getFromLocalStorage();
    if (!recipes) {
      console.log('fetching recipe data');
      const url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=brie`;
      this.props.fetchRecipes(url);
    }
    //dispatch addRecipes action to send data to global state tree
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          {/* <Route exact path="/recipes" component={CardContainer} /> */}
        </Switch>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
