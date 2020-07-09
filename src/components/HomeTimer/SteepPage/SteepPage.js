import React from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer/Timer'

class SteepPage extends React.Component {

    backClick = () => {
         this.props.history.push('/home');
    }

    render() {
        return(
            <>
            {this.props.selectedTea.id ?
            <div className="centerTimerSearch">
                {console.log('selected Tea:', this.props.selectedTea)}
            <div>
                <h2>{this.props.selectedTea.name}</h2>
                <h3>{this.props.selectedTea.temp_F}</h3>
            </div>
            <div>
                <Timer min_time={this.props.selectedTea.min_time} max_time={this.props.selectedTea.max_time}/>
                <button onClick={this.backClick}>Pick a different tea</button>
            </div>
            </div>
            :
            this.backClick()
            }
        </>
        );
    }
}


const mapStateToProps = state => ({
  selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (SteepPage);
