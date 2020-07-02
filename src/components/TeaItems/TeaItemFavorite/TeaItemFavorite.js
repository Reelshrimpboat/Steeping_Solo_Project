import React from 'react';
import { connect } from 'react-redux';
import RatingButton from '../../InputButtons/RatingButton/RatingButton'

class TeaItemFavorite extends React.Component {

    componentDidMount(){
        this.props.dispatch({
        type: 'SET_TIMED_TEA',
        payload: {}
        })
    }

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
            <li>{tea.tea_name}
            <button onClick={this.removeTea}>Remove From Favorited</button>
            {!tea.owned &&
            <button onClick={this.ownTea}>Add to Owned</button>
            }
            <button onClick={this.steepTea}>Steep This Tea</button>
            <RatingButton tea_id={this.props.tea.tea_id}/>
            </li>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect() (TeaItemFavorite);