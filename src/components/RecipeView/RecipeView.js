import React from 'react';

export const RecipeView = props => {
  const {
    calories,
    dietLabels,
    healthLabels,
    image,
    ingredientLines,
    label,
    source,
    url,
    yields
  } = props;

  const cleanLabel = label.replace('recipes', '');
  const dietLabelInfo = dietLabels.map(label => {
    return <li>{label}</li>;
  });

  const healthLabelInfo = healthLabels.map(label => {
    return <li>{label}</li>;
  });

  const ingredientList = ingredientLines.map((ingredient, i, array) => {
    return <p className="ingredient">{ingredient}</p>;
  });

  return (
    <div className="recipe-view">
      <h1 className="recipe-label">{props.label}</h1>
      <div className="recipe-overview">
        <img src={image} alt={cleanLabel} />
        <section className="nutrition-overview">
          <h3>Yields</h3>
          <ul>
            <li>{yields}</li>
          </ul>
          <h3>Diet &amp; Health Labels</h3>
          <ul>
            {dietLabelInfo}
            {healthLabelInfo}
          </ul>
          <h3>Calories</h3>
          <ul>
            <li>{calories}</li>
          </ul>
        </section>
      </div>
      <div className="ingredient-overview">
        <h3>Ingredients</h3>
        {ingredientList}
        <a href={url}>Make it</a>
      </div>
    </div>
  );
};
