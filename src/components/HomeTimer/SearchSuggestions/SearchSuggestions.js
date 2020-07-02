import React, { Component } from 'react'
import { connect } from 'react-redux';

class Suggestions extends Component {
  setTea = (event) => {
    this.props.dispatch({
      type: 'SET_TIMED_TEA',
      payload: this.props.tea
    })
  }
  
  render() {
   return (
        <li onClick={this.setTea} value={this.props.tea.id}>
          {this.props.tea.name}
        </li>
   )}
}

export default connect() (Suggestions)