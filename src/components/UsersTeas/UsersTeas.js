import React from 'react';
import { connect } from 'react-redux';

class SteepPage extends React.Component {
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
                        return<li key={tea.id}>{tea.tea_name}</li>
                    }
                    })
                }
                </ul>
                <h2>Favorite Teas</h2>
                <ul>
                {this.props.usersTeas &&
                    this.props.usersTeas.map((tea) => {
                    if(tea.favorited === true){
                        return<li key={tea.id}>{tea.tea_name}</li>
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
export default connect(mapStateToProps) (SteepPage);