import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AdminAdd extends Component {

    // tea.name
    // tea.brand
    // tea.kind
    // tea.temp_F
    // tea.min_time
    // tea.max_time
    // tea.bitters
    // tea.description
    // tea.picture
    // tea.google_search_id
  render() {
    return (
      <section>
          <Link className="nav-link" to="/admin/Home">
              Back To Tools
          </Link>
          <Link className="nav-link" to="/admin/list">
              Review/Edit Tea Database
          </Link>
      </section>
    )
  }
}

// this allows us to use <App /> in index.js
export default connect() (AdminAdd);