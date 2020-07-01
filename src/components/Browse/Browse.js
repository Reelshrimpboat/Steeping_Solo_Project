import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../Search/Search'
import BrowseTea from '../TeaItemBrowse/TeaItemBrowse'


class Browse extends Component {

 render() {
   return (
    <section>
      <Search />
        {this.props.teas &&
          this.props.teas.map((tea) => 
              <BrowseTea key={tea.id} tea={tea} rating={this.props.ratings[tea.id-1]}/>
          )
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
