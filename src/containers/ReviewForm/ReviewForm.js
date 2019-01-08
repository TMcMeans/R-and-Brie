import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addReview } from '../../actions/index'

export class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      rating: 0,
      label: '',
      name: ''
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
      label: this.props.label,
      date: new Date()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { reviews } = this.props
    if (!reviews.includes(this.state.label)) {
      this.props.addReview(this.state)
    }
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="review">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" placeholder="Add a comment..." name="caption" value={this.state.caption} onChange={this.handleChange} />
          <h2>Rating from state: {rating}</h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
            starColor={`#ffb400`}
            emptyStarColor={`#000`}
            className="star-ratings"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  reviews: state.reviews
})

export const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch(addReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

ReviewForm.propTypes = {
  reviews: PropTypes.array.isRequired,
  addReview: PropTypes.func.isRequired
}