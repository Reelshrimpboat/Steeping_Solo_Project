import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AdminHome extends Component {

 render() {
   return (
     <section>
            <Link to="/admin/add">
                <button>Add A Tea to the Database</button>
            </Link>
            <Link to="/admin/list">
                <button>Review or Edit Tea Database</button>
            </Link>

      </section>
   )
 }
}

// this allows us to use <App /> in index.js
export default (AdminHome);