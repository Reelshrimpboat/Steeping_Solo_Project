import React, { Component } from 'react'
import { connect } from 'react-redux';

class Suggestions extends Component {

  setTea = (event) => {
    let selectedTea = this.props.results.filter((tea) => event.target.value === tea.id)
    console.log('clicked:' , selectedTea[0])
    this.props.dispatch({
      type: 'SET_TIMED_TEA',
      payload: selectedTea[0]
    })
  }

  render() {
   return (
    <ul>
     {this.props.results.map(tea => (
        <li key={tea.id} onClick={this.setTea} value={tea.id}>
          {tea.name}
        </li>
      ))}
    </ul>
   )}
}

export default connect() (Suggestions)