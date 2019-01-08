import React from 'react'

export const ReviewSection = ({ currentReviews }) => {
  let reviews;
  if (currentReviews.length > 0) {
    reviews = currentReviews.map(review => {
      return (<div className="review-section" key={review.name}>
        {/* <p>{review.date}</p> */}
        <p>{review.name}</p>
        <p>{review.caption}</p>
        <p>{review.rating}</p>
      </div>)
    })
  }
  return (
    <div>
      {reviews}
    </div>
  )
}


