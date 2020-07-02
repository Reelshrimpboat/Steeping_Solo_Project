import React, { Component } from 'react'
import { connect } from 'react-redux';

import BrowseTea from '../TeaItems/TeaItemBrowse/TeaItemBrowse'
import TeaPage from '../TeaPage/TeaPage'


class Browse extends Component {

 render() {
   return (
    <section>
        {this.props.teas &&
          this.props.teas.map((tea) => 
              <BrowseTea key={tea.id} tea={tea} rating={this.props.ratings[tea.id-1]}/>
          )
        }
        {this.props.teas[0] &&
        <TeaPage tea={this.props.teas[2]} /> 
        }
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
