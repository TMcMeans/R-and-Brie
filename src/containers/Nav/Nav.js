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
        <Link className="nav-item" to={`/type/american`}>
          <div className="cheese">
            <img src="" alt="" id="american" />
          </div>
          American
        </Link>
      </div>
    );
  }
}

export default Nav;
