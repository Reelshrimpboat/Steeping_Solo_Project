import React from 'react';
import { connect } from 'react-redux';
import OwnedTea from '../TeaItems/TeaItemOwned/TeaItemOwned'
import FavoriteTea from '../TeaItems/TeaItemFavorite/TeaItemFavorite'
import ReviewField from '../InputButtons/ReviewField/ReviewField'

class usersTeas extends React.Component {

    state = {
        reviewToggled: false,
        reviewTeaId: 0,
    }

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_USERS_TEAS'})
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

    render() {
        return(
            <section>
                <h2>Owned Teas</h2>
                <ul>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.owned === true){
                        return <OwnedTea key={tea.id} tea={tea}/>
                    }
                    else{
                        return null;
                    }
                    })
                }
                </ul>
                <h2>Favorite Teas</h2>
                <ul>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.favorited === true){
                        return <FavoriteTea key={tea.id} tea={tea}/>
                    }
                    else{
                        return null;
                    }
                    })
                }
                </ul>
                <h2>Tea Reviews</h2>
                <ul>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.review !== null){
                        return <li key={tea.id}>{tea.tea_name} {tea.review}
                        {this.state.reviewToggled === true ?
                        <>
                        {this.state.reviewTeaId == tea.tea_id &&
                        <>
                        <ReviewField review={tea.review} rating={tea.rating} />
                        <button onClick={this.reviewToggleOff}>Done Editing</button>
                        </>
                        }
                        </>
                        :
                        <button onClick={this.reviewToggleOn} value={tea.tea_id}>Edit Review</button>
                        }
                        </li>
                    }
                    else{
                        return null;
                    }
                    })
                }
                </ul>
            </section>
        );
    }
}


const mapStateToProps = state => ({
  usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (usersTeas);