import React from 'react';
import { connect } from 'react-redux';
import './RatingButton.css'

class RatingButton extends React.Component {

    state = {
        rating: 3
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
                <label for="star-1">
                <input className="star star-1" value="1" type="radio" name="star"/>
                </label>
                <label for="star-2">
                <input className="star star-2" value="2" type="radio" name="star"/>
                </label>
                <label for="star-3">
                <input className="star star-3" value="3" type="radio" name="star"/>
                </label>
                <label for="star-4">
                <input className="star star-4" value="4" type="radio" name="star"/>
                </label>
                <label for="star-5">
                <input className="star star-5" value="5" type="radio" name="star"/>
                </label>
            </form>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (RatingButton);