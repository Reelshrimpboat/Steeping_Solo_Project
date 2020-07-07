import React from 'react';
import RatingsStars from '../RatingStars/RatingStars'

class Review extends React.Component {

    render() {
        return(
            <div>
                <RatingsStars number={this.props.review.rating} />
                <p>{this.props.review.review}</p>
                <h4>{this.props.review.username}</h4>
            </div>
        );
    }
}

export default (Review);