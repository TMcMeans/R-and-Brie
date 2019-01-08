import React from 'react';
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className="header">
      <Link to="/home" className="title">R&amp;Brie</Link>
      <h1 className="favs">
        Favs <span className="total-favs">0</span>
      </h1>
    </div>
  );
};
