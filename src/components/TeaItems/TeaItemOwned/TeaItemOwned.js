import React from 'react';
import { connect } from 'react-redux';
import RatingButton from '../../InputButtons/RatingButton/RatingButton'

class TeaItemOwned extends React.Component {

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
        // this.props.dispatch({
        //     type: 'SET_TIMED_TEA',
        //     payload: this.props.tea
        // })
    }

    render() {
        let tea = this.props.tea
        return(
            <div className="ownedTea">{tea.tea_name}
            <RatingButton tea_id={this.props.tea.tea_id} rating={this.props.tea.rating}/>
            <br />
            <button onClick={this.removeTea}>Remove From Owned</button>
        
            {!tea.favorited &&
            <button onClick={this.favoriteTea}>Favorite This Tea</button>
            }
            <button onClick={this.steepTea}>Steep This Tea</button>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemOwned);