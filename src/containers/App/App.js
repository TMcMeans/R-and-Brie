import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';

import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions';
import '../../styles/main.scss';

import { Header } from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import { Welcome } from '../../components/Welcome/Welcome';
import RecipeView from '../RecipeView/RecipeView';
import { Error } from '../Error/Error'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' render={props =>
            <div>
              <Header />
              <Nav />
              <Welcome />
            </div>
          } />
          <Route exact path='/' render={props =>
            <div>
              <Header />
              <Nav />
              <Welcome />
            </div>
          } />
          <Route exact path="/type/:label" render={({ match }) =>
            <div>
              <Header />
              <Nav />
              <CardContainer label={match.params.label} history={this.props.history} />
            </div>
          } />

          <Route
            exact path="/recipes/:label"
            render={({ match }) => {
              const { label } = match.params;
              const { recipes } = this.props;
              const recipe = recipes.find(recipe => recipe.label === label);
              if (recipe) {
                return (<RecipeView {...recipe} />);
              }
            }}
          />
          <Route path="/" render={() => {
            return <Error />
          }} />
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
