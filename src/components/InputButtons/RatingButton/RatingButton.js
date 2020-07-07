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
            <label htmlFor="5-Star Rating">
            <form id="starForm">
                {this.state.starNumber.map((numb) => 
                <input
                key={numb} 
                type="radio"
                name="star"
                value={numb} 
                onChange={this.changeRating} 
                />
                )}
            </form>
            </label>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (RatingButton);