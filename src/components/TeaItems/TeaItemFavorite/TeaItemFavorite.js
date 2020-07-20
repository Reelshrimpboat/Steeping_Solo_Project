import React from 'react';
import { connect } from 'react-redux';
import RatingButton from '../../InputButtons/RatingButton/RatingButton'

class TeaItemFavorite extends React.Component {

    removeTea = () => {
        this.props.dispatch({
            type: 'CHANGE_FAVORITE_STATUS',
            payload: {
                id: this.props.tea.tea_id,
                status: false
            }
        })
    }

    ownTea = () => {
       this.props.dispatch({
           type: 'CHANGE_OWNED_STATUS',
           payload: {
               id: this.props.tea.tea_id,
               status: true
           }
       })
    }

    steepTea = () => {
        this.props.dispatch({
            type: 'SET_TIMED_TEA',
            payload: this.props.tea
        })
    }

    render() {
        let tea = this.props.tea
        return(
            <div className="favoriteTea">
            <h4>{tea.tea_name}</h4>
            <img src={tea.picture} alt={tea.tea_name} width="300"></img>
            <br />
            {this.props.tea.rating ?
            <RatingButton tea_id={this.props.tea.tea_id} rating={this.props.tea.rating}/>
            :
            <RatingButton tea_id={this.props.tea.tea_id} rating={0}/>
            }
            <br />
            <button onClick={this.removeTea}>Remove From Favorited</button>
            {!tea.owned &&
            <>
            <br />
            <button onClick={this.ownTea}>Add to Owned</button>
            </>
            }
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemFavorite);