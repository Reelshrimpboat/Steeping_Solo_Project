import React, { Component } from 'react'
import { connect } from 'react-redux';
import Search from '../Search/Search'


class Home extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'SET_TIMED_TEA',
      payload: {}
    })
  }

 steepClick = () => {
  this.props.history.push(`/steep`);
 }

 render() {
   return (
    <section className="center">
      {this.props.selectedTea.min_time ?
        <div className="pickOrSelected">
            <h2>{this.props.selectedTea.name}</h2>
            <h3>Steeping Time: {this.props.selectedTea.min_time/60} - {this.props.selectedTea.max_time/60}</h3>
            <h3>Steeping Temp: {this.props.selectedTea.temp_F}&deg;F</h3>
            <button onClick={this.steepClick}>Steep!</button>
        </div>
        :
        <div className="pickOrSelected">
        <h1>Pick a tea, any tea!</h1>
        </div>
        }
      <Search />
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
export default connect(mapStateToProps) (Home);
