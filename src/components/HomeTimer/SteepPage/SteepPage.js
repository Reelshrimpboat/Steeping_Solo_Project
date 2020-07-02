import React from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer/Timer'

class SteepPage extends React.Component {

    backClick = () => {
         this.props.history.push('/home');
    }

    render() {
        return(
            <div>
                <Timer min_time={this.props.selectedTea.min_time} max_time={this.props.selectedTea.max_time}/>
                <button onClick={this.backClick}>Pick a different tea</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
  selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (SteepPage);
