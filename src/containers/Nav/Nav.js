import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      selectedCheese: ''
    };
  }

  render() {
    return (
      <div className="nav">
        <Link className="nav-item" to="/recipes">
          Brie
        </Link>
        <Link className="nav-item" to="/recipes">
          Parmesan
        </Link>
        <Link className="nav-item" to="/recipes">
          Feta
        </Link>
        <Link className="nav-item" to="/recipes">
          Swiss
        </Link>
        <Link className="nav-item" to="/recipes">
          Mozarella
        </Link>
        <Link className="nav-item" to="/recipes">
          Cheddar
        </Link>
        <Link className="nav-item" to="/recipes">
          Blue
        </Link>
        <Link className="nav-item" to="/recipes">
          Asiago
        </Link>
        <Link className="nav-item" to="/recipes">
          Fontina
        </Link>
        <Link className="nav-item" to="/recipes">
          American
        </Link>
      </div>
    );
  }
}

export default Nav;
