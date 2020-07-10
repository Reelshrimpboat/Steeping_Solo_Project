import React, { Component } from 'react'
import { connect } from 'react-redux';
import Review from '../ReviewItem/ReviewItem'
import ReviewField from '../InputButtons/ReviewField/ReviewField'
import RatingStars from '../RatingStars/RatingStars'


class Browse extends Component {

    state = {
        reviews: [],
        owned: false,
        favorited: false,
        reviewed: false,
        reviewToggled: false,
    }
    
    addOwnedTea = () => {
            this.props.dispatch({
                type: 'CHANGE_OWNED_STATUS',
                payload: {
                    id: this.props.location.tea.id,
                    status: true
                }
            })
        this.setState({
            owned: true
        })
    }
    removeOwnedTea = () => {
            this.props.dispatch({
                type: 'CHANGE_OWNED_STATUS',
                payload: {
                    id: this.props.location.tea.id,
                    status: false
                }
            })
        this.setState({
            owned: false
        })
    }

    addFavoritedTea = () => {
            this.props.dispatch({
                type: 'CHANGE_FAVORITE_STATUS',
                payload: {
                    id: this.props.location.tea.id,
                    status: true
                }
            })
        this.setState({
            favorited: true
        })
    }
    removeFavoritedTea = () => {
            this.props.dispatch({
                type: 'CHANGE_FAVORITE_STATUS',
                payload: {
                    id: this.props.location.tea.id,
                    status: false
                }
            })
        this.setState({
            favorited: false
        })
    }

    //gets reviews
    getReviews = (numb) => {
        //GET request
        this.props.dispatch({
            type: 'FETCH_REVIEWS',
            payload: this.props.location.tea.id
        })
        // let reviewsGotten = this.props.reviews.slice(0, numb).map((review) => {return review})
        // console.log(reviewsGotten);
        // this.setState({
        //     reviews: reviewsGotten,
        // })
        
        //use setState to set specific number of teas
    }

    checkIfOwned = () => {
        for (let index = 0; index < this.props.usersTeas.length; index++) {
            const tea = this.props.usersTeas[index];
            if(this.props.location.tea.id == tea.tea_id && tea.owned === true){
                this.setState({
                    owned: true
                })
                return true
            }
        }
        this.setState({
            owned: false
        })
        return false 
    }
    checkIfFavorited = () => {
        for (let index = 0; index < this.props.usersTeas.length; index++) {
            const tea = this.props.usersTeas[index];
            if(this.props.location.tea.id == tea.tea_id && tea.favorited === true){
                this.setState({
                    favorited: true
                })
                return true
            }
        }
        this.setState({
            favorited: false
        })
        return false 
    }
    checkIfReviewed = () => {
        for (let index = 0; index < this.props.usersTeas.length; index++) {
            const tea = this.props.usersTeas[index];
            console.log('review,' , tea.tea_id , this.props.location.tea.id) 
            if (this.props.location.tea.id == tea.tea_id && tea.review !== null) {
                this.setState({
                    reviewed: true
                })
                return true
            }
        }
        this.setState({
            reviewed: false
        })
        return false
    }

    changeToReviewed = () => {
        this.setState({
            reviewed: true
        })
    }

    async componentDidMount(){
        if (this.props.location.tea){
        await this.getReviews();
        this.checkIfOwned();
        this.checkIfFavorited();
        this.checkIfReviewed();
        }
    }

    reviewToggleOn = (event) => {
        if (this.state.reviewToggled === false) {
            this.setState({
                reviewToggled: true,
                reviewTeaId: event.target.value
            })
        } else {
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

    goBack = () => {
        this.props.history.push(`/browse`);
    }

 render() {
    return(
        <div>
            {this.props.location.tea ? 
            <>
            <h2>{this.props.location.tea.name}</h2>
            <img src={this.props.location.tea.picture} alt={this.props.location.tea.name} width="300"></img>
            <p>Average Rating: {this.props.location.tea.rating}</p>
            <p>{this.props.location.tea.description}</p>
            {this.props.rating &&
            <p>Rating: {this.props.rating.rating}</p>
            }
            {this.props.rating &&
            <RatingStars tea_id={this.props.location.tea.id} rating={parseFloat(this.props.location.tea.rating)}/>
            }      
            <br />
            {this.state.owned ?
            <button onClick={this.removeOwnedTea}>Remove from Owned</button>
            :
            <button onClick={this.addOwnedTea}>Add to Owned</button>
            }
            {this.state.favorited ?
            <button onClick={this.removeFavoritedTea}>Remove from Favorites</button>
            :
            <button onClick={this.addFavoritedTea}>Add to Favorites</button>
            }
            <h3>Reviews</h3>
            {this.props.reviews &&
             this.props.reviews.map((review) => {
                if(review.user_id === this.props.user.id){
                    return <div key={review.id} className="usersReview">
                        {this.state.reviewToggled === true ?
                            <>
                                <ReviewField
                                review={review.review}
                                rating={review.rating}
                                tea_id={this.props.location.tea.id}
                                toggle={this.reviewToggleOff}
                                changeToReviewed={this.changeToReviewed}
                                />
                                <button onClick={this.reviewToggleOff}>Cancel</button>
                            </>
                        :
                            <>
                                <Review key={review.id} review={review}/>
                                <button onClick={this.reviewToggleOn} value={this.props.location.tea.tea_id}>Edit Your Review</button>
                            </>
                        }
                    </div>
                } else {
                    return <Review key={review.id} review={review}/>
                }
             })
            }
            {this.state.reviewed === false &&
                <>
                {this.state.reviewToggled === true ?
                <>
                    <ReviewField
                        review={this.props.location.tea.review}
                        rating={this.props.location.tea.rating}
                        tea_id={this.props.location.tea.id}
                        toggle={this.reviewToggleOff}
                        changeToReviewed={this.changeToReviewed}
                        />
                    <button onClick={this.reviewToggleOff}>Cancel</button>
                </>
                :
                <button onClick={this.reviewToggleOn} value={this.props.location.tea.tea_id}>Add Your Own!</button>
                }
                </>
            }
            </>
            :
            this.goBack()
            }
        </div>
    );
 }
}


const mapStateToProps = state => ({
    user: state.user,
    reviews: state.reviews,
    usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Browse);
