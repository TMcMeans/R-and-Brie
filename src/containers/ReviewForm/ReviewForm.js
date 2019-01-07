import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: 0
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating } = this.state;

    return (
      <div className="review">
        <form action="">
          <input type="text" placeholder="Add a comment..." />
          <h2>Rating from state: {rating}</h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
            starColor={`#ffb400`}
            emptyStarColor={`#000`}
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
