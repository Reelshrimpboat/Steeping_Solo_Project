import React from 'react';
import { connect } from 'react-redux';
import './RatingButton.css'
import Ratings from 'react-ratings-declarative';

class RatingButton extends React.Component {

    // changeRating( newRating ) {
    //   this.setState({
    //     rating: newRating
    //   });
    // }

    changeRating = (newRating) => {
        this.props.dispatch({
            type: 'CHANGE_RATING_STATUS',
            payload: {
                id: this.props.tea_id,
                status: newRating
            }
        })
    }

    render() {
        return(
            <label htmlFor="5-Star Rating">
                <Ratings
                    rating={this.props.rating}
                    widgetRatedColors = "gold"
                    widgetDimensions = "24px"
                    widgetSpacings = "0px"
                    changeRating={this.changeRating}
                >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                </Ratings>
            </label>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (RatingButton);