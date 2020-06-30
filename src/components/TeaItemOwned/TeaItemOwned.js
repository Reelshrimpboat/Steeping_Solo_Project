import React from 'react';
import { connect } from 'react-redux';

class TeaItemOwned extends React.Component {

    componentDidMount(){
        this.props.dispatch({
        type: 'SET_TIMED_TEA',
        payload: {}
        })
    }

    removeTea = () => {
        //this will be a PUT request to change owned boolean to false
    }

    favoriteTea = () => {
        //this will be a PUT request to change favorite boolean to true
    }

    steepTea = () => {
        this.props.dispatch({
            type: 'SET_TIMED_TEA',
            payload: this.props.usersTeas
        })
    }

    render() {
        let tea = this.props.usersTeas
        return(
            <li>{tea.tea_name}
            <button onClick={this.removeTea}>Remove From Owned</button>
            {tea.favorited &&
            <button onClick={this.favoriteTea}>Favorite This Tea</button>
            }
            <button onClick={this.steepTea}>Steep This Tea</button>
            </li>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemOwned);