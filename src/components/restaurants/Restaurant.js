import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { connect } from 'react-redux'

export class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id})
  }
}



export default connect(null, mapDispatchToProps)(Restaurant);
