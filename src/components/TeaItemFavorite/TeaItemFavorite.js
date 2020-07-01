import React from 'react';
import { connect } from 'react-redux';

class TeaItemFavorite extends React.Component {

    componentDidMount(){
        this.props.dispatch({
        type: 'SET_TIMED_TEA',
        payload: {}
        })
    }

    removeTea = () => {
        //this will be a PUT request to change favorite boolean to false
    }

    ownTea = () => {
       this.props.dispatch({
           type: 'CHANGE_OWNED_STATUS',
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
            <button onClick={this.removeTea}>Remove From Favorited</button>
            {!tea.owned &&
            <button onClick={this.ownTea}>Add to Owned</button>
            }
            <button onClick={this.steepTea}>Steep This Tea</button>
            </li>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemFavorite);