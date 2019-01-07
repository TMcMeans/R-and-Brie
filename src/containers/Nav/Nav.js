import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { app_key, app_id } from '../../apikey';

import * as Helper from '../../helper/helper';
import { fetchRecipes } from '../../thunks/fetchRecipes';
import { addRecipes } from '../../actions/index';

class Nav extends Component {

  updateRecipes = async () => {
    const { label, fetchRecipes, addRecipes } = this.props;
    let url;
    let recipes;
    recipes = Helper.getFromLocalStorage(label);
    console.log(`${label}: ${recipes}`)
    if (!recipes) {
      url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${label}`;
      await fetchRecipes(label, url);
    } else {
      await addRecipes(recipes);
    }
  }

  render() {
    return (
      <div className="nav">
        <Link className="nav-item" to={`/type/brie`}>
          <div className="cheese">
            <img src="" alt="" id="brie" />
          </div>
          Brie
        </Link>
        <Link className="nav-item" to={`/type/parmesean`}>
          <div className="cheese">
            <img src="" alt="" id="parmesean" />
          </div>
          Parmesan
        </Link>
        <Link className="nav-item" to={`/type/feta`}>
          <div className="cheese">
            <img src="" alt="" id="feta" />
          </div>
          Feta
        </Link>
        <Link className="nav-item" to={`/type/swiss`}>
          <div className="cheese">
            <img src="" alt="" id="swiss" />
          </div>
          Swiss
        </Link>
        <Link className="nav-item" to={`/type/mozzarella`}>
          <div className="cheese">
            <img src="" alt="" id="mozzarella" />
          </div>
          Mozzarella
        </Link>
        <Link className="nav-item" to={`/type/cheddar`}>
          <div className="cheese">
            <img src="" alt="" id="cheddar" />
          </div>
          Cheddar
        </Link>
        <Link className="nav-item" to={`/type/blue%20cheese`}>
          <div className="cheese">
            <img src="" alt="" id="bluecheese" />
          </div>
          Blue
        </Link>
        <Link className="nav-item" to={`/type/asiago`}>
          <div className="cheese">
            <img src="" alt="" id="asiago" />
          </div>
          Asiago
        </Link>
        <Link className="nav-item" to={`/type/fontina`}>
          <div className="cheese">
            <img src="" alt="" id="fontina" />
          </div>
          Fontina
        </Link>
        <Link className="nav-item" to={`/type/american%20cheese`}>
          <div className="cheese">
            <img src="" alt="" id="american" />
          </div>
          American
        </Link>
      </div>
    );
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
)(Nav);