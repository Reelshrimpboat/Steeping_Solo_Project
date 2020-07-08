import React from 'react';
import { connect } from 'react-redux';
import RatingButton from '../../RatingStars/RatingStars'
import ReviewField from '../../InputButtons/ReviewField/ReviewField'

class TeaReview extends React.Component {


    state = {
        reviewToggled: false,
        reviewTeaId: 0,
    }

    reviewToggleOn = (event) => {
        if(this.state.reviewToggled === false){
        this.setState({
            reviewToggled: true,
            reviewTeaId: event.target.value
        })
        } else{
            alert('Close your review edit before editing another')
        }
    }

    reviewToggleOff = () => {
        console.log('clicked toggle off')
        this.setState({
            reviewToggled: false,
            reviewTeaId: 0
        })
    }

    changeToReviewed = () => {
        console.log('Reivew Updated');
    }

    render() {
        let tea = this.props.tea
        return(
            <div className="reviewedItem">
                <h4>{tea.tea_name}</h4>
                    {this.state.reviewToggled === true ?
                        <>
                            {/* {this.state.reviewTeaId == tea.tea_id && */}
                                <>
                                    <ReviewField
                                    review={tea.review}
                                    rating={tea.rating}
                                    tea_id={tea.tea_id}
                                    toggle={this.reviewToggleOff}
                                    changeToReviewed={this.changeToReviewed}
                                    />
                                    <button onClick={this.reviewToggleOff}>Cancel</button>
                                </>
                            {/* } */}
                        </>
                    :
                        <>
                            <RatingButton tea_id={this.props.tea.tea_id} rating={this.props.tea.rating} />
                            <p>{tea.review}</p>
                            <button onClick={this.reviewToggleOn} value={tea.tea_id}>Edit Review</button>
                        </>
                    }
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaReview);