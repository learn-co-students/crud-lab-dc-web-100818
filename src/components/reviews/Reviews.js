import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviewMatchingRestaurant =  this.props.reviews.filter((review) => review.restaurantId === this.props.restaurantId) 
    let reviewList = reviewMatchingRestaurant.map((review, idx) => <Review key={idx} review={review} deleteReview={this.props.deleteReview} />)

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;