import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: 0
    };
  }

  render() {
    return (
      <div className="review">
        <form action="">
          <input type="text" placeholder="Add a comment..." />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
