import React from 'react';
import { connect } from 'react-redux';
import OwnedTea from '../TeaItemOwned/TeaItemOwned'
import FavoriteTea from '../TeaItemFavorite/TeaItemFavorite'

class usersTeas extends React.Component {
 componentDidMount() {
    this.props.dispatch({type: 'FETCH_USERS_TEAS'})
 }
    render() {
        return(
            <section>
                <h2>Owned Teas</h2>
                <ul>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.owned === true){
                        return <OwnedTea key={tea.id} usersTeas={tea}/>
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
                        return <FavoriteTea key={tea.id} usersTeas={tea}/>
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
                        return<li key={tea.id}>{tea.tea_name} {tea.review}</li>
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