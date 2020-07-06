import React from 'react';
import { connect } from 'react-redux';
import './ReviewField.css'

class ReviewField extends React.Component {

    state = {
        review: '',
        rating: 0,
        starNumber: [1, 2, 3, 4, 5]
    }

    componentDidMount(){
        if (this.props.review){
            this.setState({
                review: this.props.review,
                rating: this.props.rating
            })
        }
    }

    handleReviewChange = (event) => {
        this.setState({
            review: event.target.value
        })
    }

    changeRating = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    addButton = (event) => {

        if(this.state.review !== '' & this.state.rating !== 0){
            console.log('to dispatch, review:', this.state.review, 'rating:', this.state.rating)
            this.props.dispatch({
                type: 'CHANGE_REVIEW',
                payload: {
                    id: this.props.tea_id,
                    review: this.state.review,
                    rating: this.state.rating
                }
            })
        } else {
            alert('Please input to both fields')
        }
    }

    render() {
        return(
            <>
                <label htmlFor="ReviewField">
                <form>
                    <textarea value={this.state.review} onChange={this.handleReviewChange}></textarea>
                </form>
                </label>
                <label htmlFor="5-Star Rating">
                <form id="starForm">
                {this.state.starNumber.map((numb) => 
                    <input
                    key={numb} 
                    type="radio"
                    name="star"
                    value={numb} 
                    onChange={this.changeRating} 
                    // defaultChecked={numb <= this.props.rating}
                    />
                )}
                </form>
                </label>
                <label htmlFor="SaveButton">
                <button onClick={this.addButton}> Save Review</button>
                </label>

            </>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (ReviewField);