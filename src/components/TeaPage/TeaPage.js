import React, { Component } from 'react'
import { connect } from 'react-redux';
import Review from '../Review/Review'


class Browse extends Component {

    state = {
        reviews: [],
        owned: false,
        favorited: false,
    }

    rateTea = () => {
        //will be put/post
    }
    addOwnedTea = () => {
            this.props.dispatch({
                type: 'CHANGE_OWNED_STATUS',
                payload: {
                    id: this.props.tea.id,
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
                    id: this.props.tea.id,
                    status: false
                }
            })
        this.setState({
            owned: false
        })
    }
    favoriteTea = () => {
        //will be put/post
    }

    //gets reviews
    getReviews = () => {
        //GET request
        this.props.dispatch({
            type: 'FETCH_REVIEWS',
            payload: this.props.tea.id
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
            const element = this.props.usersTeas[index];
            if(this.props.tea.id == element.id && element.owned === true){
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

    componentDidMount(){
        this.getReviews();
        this.checkIfOwned();
    }


 render() {
    let tea = this.props.tea
    let imageDescription = `A cup of ${tea.name}`;
    return(
        <div>
            <h2>{tea.name}</h2>
            <img src={tea.picture} alt={imageDescription} width="300"></img>
            <p>{tea.description}</p>
            {this.props.rating &&
            <p>Rating: {this.props.rating.rating}</p>
            }
            {console.log('is it owned:' , this.state.owned)}
            <button onClick={this.rateTea}>Rate Tea</button>
            {this.state.owned ?
            <button onClick={this.removeOwnedTea}>Remove from Owned</button>
            :
            <button onClick={this.addOwnedTea}>Add to Owned</button>
            }
            <button onClick={this.favoriteTea}>Add to Favorites</button>
            <h3>Reviews</h3>
            {this.props.reviews &&
             this.props.reviews.map((review) =>
             <Review key={review.id} review={review}/>
             )
            }
        </div>
    );
 }
}


const mapStateToProps = state => ({
    reviews: state.reviews,
    usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Browse);
