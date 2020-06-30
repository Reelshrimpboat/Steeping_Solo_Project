import React from 'react';
import { connect } from 'react-redux';

class SteepPage extends React.Component {

    render() {
        return(
            <section>
                <h2>You Will Eventually Be Able To Find Your Teas Here!</h2>
            </section>
        );
    }
}


const mapStateToProps = state => ({
  selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (SteepPage);