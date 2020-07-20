import React from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer/Timer'

class SteepPage extends React.Component {

    backClick = () => {
         this.props.history.push('/home');
    }

    render() {
        return(
            <section className="center">
            {this.props.selectedTea.id ?
            <div className="centerTimerSearch">
                {console.log('selected Tea:', this.props.selectedTea)}
            <div>
                <h1>{this.props.selectedTea.name}</h1>
                <h2>{this.props.selectedTea.temp_F}&deg;F</h2>
            </div>
            <div>
                <Timer min_time={this.props.selectedTea.min_time} max_time={this.props.selectedTea.max_time}/>
                <button onClick={this.backClick}>Pick a different tea</button>
            </div>
            </div>
            :
            this.backClick()
            }
        </section>
        );
    }
}


const mapStateToProps = state => ({
  selectedTea: state.timer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps) (SteepPage);
