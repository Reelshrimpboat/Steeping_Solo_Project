import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import ProtectedRoute from '../LoginRegister/ProtectedRoute/ProtectedRoute'

import BrowseTea from '../TeaItems/TeaItemBrowse/TeaItemBrowse'
import TeaPage from '../TeaPage/TeaPage'


class Browse extends Component {

   selectTea = (event) => {
     this.props.history.push(`/tea/${event.target.id}`);
   }

 render() {
   return (
    <section>
        {this.props.teas &&
          this.props.teas.map((tea) => 
              <BrowseTea key={tea.id} tea={tea} id={tea.id} rating={this.props.ratings[tea.id-1]} onClick={this.selectTea}/>
          )
        }
        {this.props.teas[0] &&
        <TeaPage tea={this.props.teas[2]} /> 
        }
        <Router>
          <ProtectedRoute
              exact
              path="/tea/:id"
              component={TeaPage}
            />
        </Router>
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
export default connect(mapStateToProps) (Browse);
