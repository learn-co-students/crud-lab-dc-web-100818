import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
    constructor(){
      super()
      this.state = {
        text: '',
     
      }
    }
  
    handleChange = (event) => {
      this.setState({
        text: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      // console.log(this.state)
      this.props.addReview({review: this.state.text, restaurantId: this.props.restaurantId})
      this.setState({
        text: ''
      })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='review' >Write Review</label>
          <input type='text' id='review' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
