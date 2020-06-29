import React, { Component } from 'react'
import { connect } from 'react-redux';

class Search extends Component {
 state = {
   query: '',
   results: []
 }

 searchCheck = () => {
    // console.log('query:', this.state.query, this.props.teas[0].name)
    // let name = this.props.teas[0].name
    // let includes = name.includes(this.state.query)
    // console.log('includes:', includes);
    let query = this.state.query;
    
    let newReturn = this.props.teas.filter((tea) => tea.name.includes(query) === true)
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

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <ul>{this.props.teas &&
       this.state.results.map((tea)=> 
       <li key={tea.id}>{tea.name}</li>
       )}</ul>
     </form>
   )
 }
}

const mapStateToProps = state => ({
    user: state.user,
    teas: state.teas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Search);