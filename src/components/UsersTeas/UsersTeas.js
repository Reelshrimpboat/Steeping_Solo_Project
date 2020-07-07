import React from 'react';
import { connect } from 'react-redux';
import OwnedTea from '../TeaItems/TeaItemOwned/TeaItemOwned'
import FavoriteTea from '../TeaItems/TeaItemFavorite/TeaItemFavorite'
import ReviewTea from '../TeaItems/TeaItemReview/TeaItemReview'

class usersTeas extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_USERS_TEAS'})
    }

    render() {
        return(
            <section>
                <h2>Owned Teas</h2>
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
                <h2>Favorite Teas</h2>
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
                <h2>Tea Reviews</h2>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.review !== null){
                        return <ReviewTea key={tea.id} tea={tea}/>
                    }
                    else{
                        return null;
                    }
                    })
                }
            </section>
        );
    }
}


const mapStateToProps = state => ({
  usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (usersTeas);