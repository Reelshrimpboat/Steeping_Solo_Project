import React from 'react';
import { connect } from 'react-redux';
import './RatingButton.css'

class RatingButton extends React.Component {

    state = {
        starNumber: [1,2,3,4,5]
    }

    changeRating = (event) => {
        this.props.dispatch({
            type: 'CHANGE_RATING_STATUS',
            payload: {
                id: this.props.tea_id,
                status: event.target.value
            }
        })
    }

    render() {
        return(
            <form id="starForm" onChange={this.changeRating}>
                {this.state.starNumber.map((numb) => 
                <label key={numb}>
                <input value={numb} type="radio" name="star"/>
                </label>
                )}
            </form>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (RatingButton);