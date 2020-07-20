import React from 'react';
import { connect } from 'react-redux';
import Ratings from 'react-ratings-declarative';
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

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        })
    }

    saveButton = (event) => {

        if(this.state.review === '' || this.state.rating === 0){
            alert('Please input to both fields')
        } else {
            console.log('to dispatch, review:', this.state.review, 'rating:', this.state.rating, 'id:', this.props.tea_id)
            this.props.dispatch({
                type: 'CHANGE_REVIEW',
                payload: {
                    id: this.props.tea_id,
                    review: this.state.review,
                    rating: this.state.rating
                }
            })
            this.props.changeToReviewed();
            this.props.toggle();

        }
    }

    deleteReview = (event) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.props.dispatch({
                    type: 'REMOVE_REVIEW',
                    payload: {
                        id: this.props.tea_id
                    }
                }
            )
            this.props.changeToReviewed();
            this.props.toggle();
        }
        else{
            console.log('didnt delete that review');
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
                <Ratings
                    rating={this.state.rating}
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
                <label htmlFor="SaveButton">
                <button onClick={this.saveButton}>Save Review</button>
                </label>
                {this.props.review && 
                    <label htmlFor="DeleteButton">
                        <button onClick={this.deleteReview}>Delete Review</button>
                    </label>
                }

            </>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (ReviewField);