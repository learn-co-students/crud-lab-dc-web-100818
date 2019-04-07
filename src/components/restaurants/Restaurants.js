import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
   
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}restaurant={restaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;