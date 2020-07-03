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
            <input type="text"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            placeholder="Description"></input>
            <br />
            <label>Image URL</label>
            <textarea type="text"
            onChange={this.handleChange}
            value={this.state.picture}
            name="picture"
            placeholder="Picture"></textarea>
            <br />
            <label>Goolge Price Tracking ID</label>
            <input type="text"
            onChange={this.handleChange}
            value={this.state.google_search_id}
            name = "google_search_id"
            placeholder="Google Shopping Search ID"></input>
            <br />
          </form>
      </section>
    )
  }
}

// this allows us to use <App /> in index.js
export default connect() (AdminAdd);