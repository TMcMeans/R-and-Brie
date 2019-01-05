import React from 'react';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="title">R&amp;Brie</h1>
      <h1 className="favs">
        Favs <span className="total-favs">0</span>
      </h1>
    </div>
  );
};
