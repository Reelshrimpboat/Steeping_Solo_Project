import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './AdminList.css'


class AdminList extends Component {

    editClick = (event) => {
        this.props.history.push(`/admin/edit/${event.target.id}`);
    }

    deleteClick = (event) => {
        if (window.confirm('Are you sure you wish to delete this item?')){
            console.log('delete pressed, tea id:', event.target.id)
            this.props.dispatch({
                type: 'DELETE_TEA',
                payload: event.target.id
            })
        }
        else{
            console.log('stopped the delete');
        }
        
    }

 render() {
   return (
    <section>
        <Link to="/admin/Home">
            <button>Back To Tools</button>
        </Link>
        <Link to="/admin/add">
            <button>Add A Tea to the Database</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Kind</th>
                    <th>Temp in Farenheit</th>
                    <th>Min Time</th>
                    <th>Max Time</th>
                    <th>Does it Bitter?</th>
                    <th>Description</th>
                    <th>Picture URL</th>
                    <th>Google Ref ID</th>
                </tr>
            </thead>
            <tbody>
        {this.props.teas &&
            this.props.teas.map((tea) => 
                <tr key={tea.id}>
                    <td>{tea.name}</td>
                    <td>{tea.brand}</td>
                    <td>{tea.kind}</td>
                    <td>{tea.temp_F} &deg;F</td>
                    <td>{tea.min_time/60} Minute(s)</td>
                    <td>{tea.max_time/60} Minute(s)</td>
                    <td>{tea.bitters=== true ?
                    <>Yes</>
                    :
                    <>No</>
                    }</td>
                    <td>{tea.description}</td>
                    <td className="pictureColumn">{tea.picture}</td>
                    <td>{tea.google_search_id}</td>
                    <td><button onClick={this.editClick} id={tea.id}>Edit</button></td>
                    <td><button onClick={this.deleteClick} id={tea.id}>Delete</button></td>
                </tr>
            )
        }
        </tbody>
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
