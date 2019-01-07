import React, { Component } from 'react';
import { connect } from 'react-redux';
import { app_key, app_id } from '../../apikey';
import { Switch, Route, withRouter } from 'react-router';

import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions';
import * as Helper from '../../helper/helper';
import '../../styles/main.scss';

import { Header } from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import { Welcome } from '../../components/Welcome/Welcome';
import { RecipeView } from '../RecipeView/RecipeView';

class App extends Component {
  async componentDidMount() {
    // const recipes = Helper.getFromLocalStorage();
    // if (!recipes) {
    //   const url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=brie`;
    //   this.props.fetchRecipes(url);
    // } else {
    //   this.props.addRecipes(recipes);
    // }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/home" component={Welcome} /> */}
          <Route path='/home' render={props =>
            <div>
              <Header />
              <Nav />
              <Welcome />
            </div>
          } />
          <Route path="/type/:label" render={({ match }) =>
            <div>
              <Header />
              <Nav />
              <CardContainer label={match.params.label} history={this.props.history} />
            </div>
          } />

          <Route
            path="/recipes/:label"
            render={({ match }) => {
              const { label } = match.params;
              const { recipes } = this.props;
              const recipe = recipes.find(recipe => recipe.label === label);
              if (recipe) {
                return (<RecipeView {...recipe} />);
              }
            }}
          />
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
