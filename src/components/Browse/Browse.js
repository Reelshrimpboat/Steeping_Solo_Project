import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

import BrowseTea from '../TeaItems/TeaItemBrowse/TeaItemBrowse'
import TeaPage from '../TeaPage/TeaPage'


class Browse extends Component {

 render() {
   return (
    <section>
        {this.props.teas &&
          this.props.teas.map((tea) => 
              <Link key={tea.id} to={{
                pathname: `/tea`,
                tea: tea,
                state: { modal: true }
              }}>
              <BrowseTea tea={tea} id={tea.id} rating={this.props.ratings[tea.id-1]} />
              </Link>
          )
        }
        {/* {this.props.teas[0] &&
        <TeaPage tea={this.props.teas[2]} /> 
        } */}
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
