import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ReviewForm from '../ReviewForm/ReviewForm';
import { Header } from '../../components/Header/Header'
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
  let cleanLabel;
  if (label.includes('recipes')) {
    cleanLabel = label.replace('recipes', '');
  }
  const dietLabelInfo = dietLabels.map(label => {
    return <li key={label}>{label}</li>;
  });

  const healthLabelInfo = healthLabels.map(label => {
    return <li key={label}>{label}</li>;
  });

  const ingredientList = ingredientLines.map((ingredient, i, array) => {
    return <p className="ingredient" key={ingredient}>{ingredient}</p>;
  });

  const currentReviews = reviews.filter(review => review.label === label)
  return (
    < div className="recipe-view-page" >
      <Header />
      <h1 className="recipe-label">{props.label}</h1>
      <div className="recipe-overview">
        <img src={image} alt={cleanLabel} className="recipe-img" />
        <section className="nutrition-overview">
          <h3 className="yields">Yields</h3>
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
        <h3 className="ingredients-title">Ingredients</h3>
        {ingredientList}
        <a href={url} target="_blank" className="recipe-link">Make it</a>
      </div>

      <div className="review-section">
        <h1>Conversation</h1>
        <hr />
        <ReviewForm label={label} />
        <ReviewSection currentReviews={currentReviews} />
      </div>
    </div >
  );
};


export const mapStateToProps = (state) => ({
  reviews: state.reviews
})

export default connect(mapStateToProps)(RecipeView);

RecipeView.propTypes = {
  reviews: PropTypes.array.isRequired
}