import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  // const { restaurant } = this.props

  handleDelete = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
