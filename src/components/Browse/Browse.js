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
              <BrowseTea key={tea.id} tea={tea}/>
          )
        }
     </section>
   )
 }
}

const mapStateToProps = state => ({
    teas: state.teas,
    usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Browse);
