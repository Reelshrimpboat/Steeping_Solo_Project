import React, { Component } from 'react'
import { connect } from 'react-redux';


class Browse extends Component {

    state = {
        reviews: {}
    }

    rateTea = () => {
        //will be put/post
    }
    ownTea = () => {
        //will be put/post
    }
    favoriteTea = () => {
        //will be put/post
    }

    //gets reviews
    getReviews = (numberToGet) => {
        //GET request
        this.props.dispatch({
            type: 'FETCH_REVIEWS',
            payload: this.props.tea.id
        })
        //use setState to set specific number of teas
    }

    componentDidMount(){
        this.getReviews(3);
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
            <button onClick={this.rateTea}>Rate Tea</button>
            <button onClick={this.ownTea}>Add to Owned</button>
            <button onClick={this.favoriteTea}>Add to Favorites</button>
            <h3>Reviews</h3>
            {this.props.reviews.review &&
             <p>{this.props.reviews[0].review}</p>
            }
        </div>
    );
 }
}


const mapStateToProps = state => ({
    reviews: state.reviews
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (Browse);
