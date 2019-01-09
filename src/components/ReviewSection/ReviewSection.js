import React from 'react'
import PropTypes from 'prop-types'

export const ReviewSection = ({ currentReviews }) => {
  let reviews;
  if (currentReviews.length > 0) {
    reviews = currentReviews.map(review => {
      return (<div className="review-section-area" key={review.name}>
        <p className="name">Name: {review.name}</p>
        <p className="current-review">Review: {review.caption}</p>
        <p>{review.rating}/5 stars</p>
        <hr />
      </div>)
    })
  }
  return (
    <div>
      {reviews}
    </div>
  )
}

ReviewSection.propTypes = {
  currentReviews: PropTypes.array.isRequired
}

