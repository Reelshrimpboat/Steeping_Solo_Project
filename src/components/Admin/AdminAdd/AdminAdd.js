import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AdminAdd extends Component {
  state = {
    name: '',
    brand: '',
    kind: 0,
    temp_F: 200,
    min_time: 3,
    max_time: 4,
    bitters: true,
    description: '',
    picture: '',
    google_search_id: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {

    let data = {
      name: this.state.name,
      brand: this.state.brand,
      kind: this.state.kind,
      temp_F: this.state.temp_F,
      min_time: this.state.min_time * 60,
      max_time: this.state.max_time * 60,
      bitters: this.state.bitters,
      description: this.state.description,
      picture: this.state.picture,
      google_search_id: this.state.google_search_id
    }

    this.props.dispatch({
      type: 'SUBMIT_TEA',
      payload: this.state
    })
    this.props.history.push(`/admin/list`);
  }

  render() {
    return (
      <section>
          <Link className="nav-link" to="/admin/Home">
              Back To Tools
          </Link>
          <Link className="nav-link" to="/admin/list">
              Review/Edit Tea Database
          </Link>
          <label>Tea to Add:</label>
          <form>
            <label>Name</label>
            <input type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            placeholder="name"></input>
            <br />
            <label>Brand</label>
            <input type="text"
            onChange={this.handleChange}
            value={this.state.brand}
            name="brand"
            placeholder="brand"></input>
            <br />
            {/* Need drop down menu for kind input, will need to get di a GET request for categories table*/}
            <label>Temperature in Farenheit</label>
            <input type="number"
            onChange={this.handleChange}
            value={this.state.temp_F}
            name="temp_F"
            placeholder="Temperature"></input>
            <br />
            {/* Will Need to make function to convert minutes into seconds, put in submit function */}
            <label>Minimum Suggested Steeping Time</label>
            <input type="number"
            onChange={this.handleChange}
            value={this.state.min_time}
            name="min_time"
            placeholder="Time in Minutes"></input>
            <br />
            <label>Maximum Suggested Steeping Time</label>
            <input type="number"
            onChange={this.handleChange}
            value={this.state.max_time}
            name="max_time"
            placeholder="Time in Minutes"></input>
            <br />
            {/* Make radial input menu for whether it bitters or not */}
            <label>Description</label>
            <textarea type="text"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            placeholder="Description"
            className="descriptionInput"></textarea>
            <br />
            <label>Image URL</label>
            <textarea type="text"
            onChange={this.handleChange}
            value={this.state.picture}
            name="picture"
            placeholder="Picture"
            className="pictureInput"></textarea>
            <br />
            <label>Goolge Price Tracking ID</label>
            <input type="text"
            onChange={this.handleChange}
            value={this.state.google_search_id}
            name = "google_search_id"
            placeholder="Google Shopping Search ID"></input>
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
      </section>
    )
  }
}

// this allows us to use <App /> in index.js
export default connect() (AdminAdd);