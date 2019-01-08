import React from 'react';
import { connect } from 'react-redux'

import ReviewForm from '../ReviewForm/ReviewForm';
import { Header } from '../Header/Header'
import { ReviewSection } from '../../components/ReviewSection/ReviewSection'

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
    yields,
    reviews
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

  const currentReviews = reviews.filter(review => review.label === label)
  console.log(currentReviews)
  return (
    < div className="recipe-view-page" >
      <Header />
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

      <div className="review-section">
        <ReviewForm label={label} />
        <ReviewSection currentReviews={currentReviews} />
      </div>
    </div >
  );
};


const mapStateToProps = (state) => ({
  reviews: state.reviews
})

export default connect(mapStateToProps)(RecipeView);