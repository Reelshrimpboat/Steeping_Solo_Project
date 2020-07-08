import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BrowseTea from '../TeaItems/TeaItemBrowse/TeaItemBrowse'


class Browse extends Component {
 
  state = {
    query: '',
    results: [],
  }

  searchCheck = () => {

    let newReturn = []

    if(this.state.query !== ''){
    newReturn = this.props.teas.filter((tea) => tea.name.includes(this.state.query) === true)
    }
    else{
    newReturn = []
    }
    this.setState({
        results: newReturn,
    }, () => {
        console.log('new results:', this.state.results)
    })
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   }, () => {
       this.searchCheck()
   })
 }
  async componentDidMount() {
        await this.props.dispatch({type: 'FETCH_USERS_TEAS'})
        this.searchCheck()
    }
  
 render() {
   const { match } = this.props;
   return (
    <section>
      <div>
        <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
        />
      </div>
      <div>
        {this.props.teas &&
        <>
          {this.state.query === '' ?
            this.props.teas.map((tea) =>
              <Link key={tea.id} to={{
                pathname: `${match.url}/tea`,
                tea: tea,
                state: { modal: true }
              }}>
                <BrowseTea tea={tea} id={tea.id} rating={tea.rating} />
              </Link>
            )
          :
          this.state.results.map((tea) =>
              <Link key={tea.id} to={{
                pathname: `${match.url}/tea`,
                tea: tea,
                state: { modal: true }
              }}>
                <BrowseTea tea={tea} id={tea.id} rating={tea.rating} />
              </Link>
          )
        }
        </>
        }
      </div>
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
