import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AdminHome extends Component {

 render() {
   return (
     <section>
            <Link className="nav-link" to="/admin/add">
                Add A Tea to the Database
            </Link>
            <Link className="nav-link" to="/admin/list">
                Review or Edit Tea Database
            </Link>
      </section>
   )
 }
}

// this allows us to use <App /> in index.js
export default (AdminHome);