import React, { Component } from 'react';

class RestaurantInput extends Component {
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
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='restaurant' >Restaurant Name</label>
          <input type='text' id='restaurant' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
         
        </form>

      </div>
    );
  }
};

export default RestaurantInput;
