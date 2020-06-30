import React from 'react';
import { connect } from 'react-redux';

class SteepPage extends React.Component {
 componentDidMount() {
    this.props.dispatch({type: 'FETCH_USERS_TEAS'})
 }
    render() {
        return(
            <section>
                <h2>You Will Eventually Be Able To Find Your Teas Here!</h2>
                {JSON.stringify(this.props.usersTeas)}
            </section>
        );
    }
}


const mapStateToProps = state => ({
  usersTeas: state.usersTeas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (SteepPage);