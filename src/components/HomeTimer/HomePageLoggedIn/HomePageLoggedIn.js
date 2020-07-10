import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search'


class Home extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_USERS_TEAS'})
    this.removeSelectedTea();
  }

  steepClick = () => {
    this.props.history.push('/steep');
  }

  setTea = (event) => {

    let result = this.props.teas.filter((tea) => tea.id == event.target.id)

    this.props.dispatch({
      type: 'SET_TIMED_TEA',
      payload: result[0]
    })
  }

  removeSelectedTea = (event) => {
    this.props.dispatch({
      type: 'SET_TIMED_TEA',
      payload: {}
    })
  }

  render() {
   return (
    <section>
        {this.props.selectedTea.min_time ?
        <div className="pickOrSelected">
            <h2>{this.props.selectedTea.name}</h2>
            <h3>Steeping Time: {this.props.selectedTea.min_time/60} - {this.props.selectedTea.max_time/60}</h3>
            <h3>Steeping Temp: {this.props.selectedTea.temp_F}</h3>
            <button onClick={this.steepClick}>Steep!</button>
        </div>
        :
        <div className="pickOrSelected">
        <h1>Pick a tea, any tea!</h1>
        </div>
        }
      <Search />
      <h2>Your Teas</h2>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.owned === true){
                        return <div key={tea.id}>
                          {console.log('tea:', tea)}
                            <p>{tea.tea_name}</p>
                            <button onClick={this.setTea} id={tea.tea_id}>Steep</button>
                            </div>
                    }
                    else{
                        return null;
                    }
                    })
                }
    </section>
   )
 }
}

const mapStateToProps = state => ({
    user: state.user,
    teas: state.teas,
    usersTeas: state.usersTeas,
    selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Home);
