import React, { Component } from 'react';
import { connect } from 'react-redux';
import RatingsStars from '../../RatingStars/RatingStars'

class TeaItemFavorite extends Component {
    selectTea = (event) => {
        this.props.history.push(`/tea/${event.target.id}`);
    }

    render() {
        let tea = this.props.tea;
        let imageDescription = `A cup of ${tea.name}`;
        return(
                <div className="browseBox">
                    <h2>{tea.name}</h2>
                    <img src={tea.picture} alt={imageDescription} width="300"></img>
                    <p>{tea.description}</p>
                    {this.props.rating &&
                    <><h4>Rating:</h4> <RatingsStars number={parseInt(this.props.rating)} /></>
                    }
                </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(TeaItemFavorite);