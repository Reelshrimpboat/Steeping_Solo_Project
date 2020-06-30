import React, { Component } from 'react'
import { connect } from 'react-redux';
import Suggestions from '../Suggestions/Suggestions'
import Timer from '../Timer/Timer'

class Search extends Component {
 state = {
   query: '',
   results: [],
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
    <section>
        {JSON.stringify(this.props.selectedTea)}
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <Suggestions results={this.state.results} />
     </form>
     {this.props.selectedTea.min_time &&
     <Timer selectedTea={this.props.selectedTea}/>
    }
     </section>
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