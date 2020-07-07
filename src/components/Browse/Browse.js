import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BrowseTea from '../TeaItems/TeaItemBrowse/TeaItemBrowse'


class Browse extends Component {

  async componentDidMount() {
        await this.props.dispatch({type: 'FETCH_USERS_TEAS'})
    }
  
 render() {
   const { match } = this.props;
   return (
    <section>
        {this.props.teas &&
          this.props.teas.map((tea) => 
              <Link key={tea.id} to={{
                pathname: `${match.url}/tea`,
                tea: tea,
                state: { modal: true }
              }}>
              <BrowseTea tea={tea} id={tea.id} rating={tea.rating} />
              </Link>
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
