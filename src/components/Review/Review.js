import React from 'react';

class Review extends React.Component {

    render() {
        return(
            <div>
                <p>{this.props.rating}</p>
                <p>{this.props.review}</p>
                <h4>{this.props.username}</h4>
            </div>
        );
    }
}

export default (Review);