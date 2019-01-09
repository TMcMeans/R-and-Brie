import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import PropTypes from 'prop-types'

import '../../styles/main.scss';
import { Header } from '../../components/Header/Header'
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import { Welcome } from '../../components/Welcome/Welcome';
import RecipeView from '../RecipeView/RecipeView';
import { Error } from '../../components/Error/Error'
import { Loader } from '../../components/Loader/Loader'

export class App extends Component {
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
              <CardContainer label={match.params.label} history={this.props.history} match={match} />
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
          <Route render={() => {
            return <Error />
          }} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  recipes: state.recipes
});

export default withRouter(
  connect(
    mapStateToProps
  )(App)
);

App.propTypes = {
  recipes: PropTypes.array
}