import React from 'react';

class Review extends React.Component {

    render() {
        return(
            <div>
                <p>{this.props.review.rating}</p>
                <p>{this.props.review.review}</p>
                <h4>{this.props.review.username}</h4>
            </div>
        );
    }
}

export default (Review);