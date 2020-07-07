import React, { Component } from 'react'
import { connect } from 'react-redux';
import Review from '../ReviewItem/ReviewItem'
import ReviewField from '../InputButtons/ReviewField/ReviewField'
import RatingButton from '../InputButtons/RatingButton/RatingButton'


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
    getReviews = () => {
        //GET request
        this.props.dispatch({
            type: 'FETCH_REVIEWS',
            payload: this.props.location.tea.id
        })
        // let reviewsGotten = this.props.reviews.map((review) => {return review})
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

    async componentDidMount(){
        await this.getReviews();
        this.checkIfOwned();
        this.checkIfFavorited();
        this.checkIfReviewed();
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


 render() {
    let tea = this.props.location.tea
    let imageDescription = `A cup of ${tea.name}`;
    return(
        <div>
            <h2>{tea.name}</h2>
            <img src={tea.picture} alt={imageDescription} width="300"></img>
            <p>Average Rating: {tea.rating}</p>
            <p>{tea.description}</p>
            {this.props.rating &&
            <p>Rating: {this.props.rating.rating}</p>
            }
            <RatingButton tea_id={this.props.location.tea.id} rating={this.props.location.tea.rating}/>
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
                                <ReviewField review={review.review} rating={review.rating} tea_id={tea.tea_id}/>
                                <button onClick={this.reviewToggleOff}>Done Editing</button>
                            </>
                        :
                            <>
                                <Review key={review.id} review={review}/>
                                <button onClick={this.reviewToggleOn} value={tea.tea_id}>Edit Your Review</button>
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
                    <ReviewField review={tea.review} rating={tea.rating} />
                    <button onClick={this.reviewToggleOff}>Done Editing</button>
                </>
                :
                <button onClick={this.reviewToggleOn} value={tea.tea_id}>Add Your Own!</button>
                }
                </>
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
