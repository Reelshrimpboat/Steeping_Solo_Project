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
        this.props.dispatch({
            type: 'CHANGE_OWNED_STATUS',
            payload: {
                id: this.props.tea.tea_id,
                status: false
            }
        })
    }

    favoriteTea = () => {
        this.props.dispatch({
            type: 'CHANGE_FAVORITE_STATUS',
            payload: {
                id: this.props.tea.tea_id,
                status: true
            }
        })
    }

    steepTea = () => {
        this.props.dispatch({
            type: 'SET_TIMED_TEA',
            payload: this.props.tea
        })
    }

    render() {
        let tea = this.props.tea
        return(
            <li>{tea.tea_name}

            <button onClick={this.removeTea}>Remove From Owned</button>
        
            {!tea.favorited &&
            <button onClick={this.favoriteTea}>Favorite This Tea</button>
            }
            <button onClick={this.steepTea}>Steep This Tea</button>
            </li>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemOwned);