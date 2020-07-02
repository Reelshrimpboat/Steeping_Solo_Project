import React, { Component } from 'react'
import { connect } from 'react-redux';
import Suggestions from '../SearchSuggestions/SearchSuggestions'

class Search extends Component {
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

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       {this.state.results.map((tea) => 
       <Suggestions tea={tea} key={tea.id}/>
       )}
     </form>
   )
 }
}

const mapStateToProps = state => ({
    user: state.user,
    teas: state.teas,
    selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Search);