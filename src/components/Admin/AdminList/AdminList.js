import React, { Component } from 'react'
import { connect } from 'react-redux';


class AdminList extends Component {

 render() {
   return (
    <section>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Kind</th>
                    <th>Temp in Farenheit</th>
                    <th>Min Steeping Time</th>
                    <th>Max Steeping Time</th>
                    <th>Does it Bitter?</th>
                    <th>Description</th>
                    <th>Picture URL</th>
                    <th>Google Ref ID</th>
                </tr>
            </thead>
        {this.props.teas &&
            this.props.teas.map((tea) => 
                <tr key={tea.id}>
                    <td>{tea.name}</td>
                    <td>{tea.brand}</td>
                    <td>{tea.kind}</td>
                    <td>{tea.temp_F}</td>
                    <td>{tea.min_time}</td>
                    <td>{tea.max_time}</td>
                    <td>{tea.bitters}</td>
                    <td>{tea.description}</td>
                    <td>{tea.picture}</td>
                    <td>{tea.google_search_id}</td>
                </tr>
            )
        }
        </table>
     </section>
   )
 }
}


const mapStateToProps = state => ({
  teas: state.teas,
  usersTeas: state.usersTeas,
  ratings: state.ratings,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (AdminList);
