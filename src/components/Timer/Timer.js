import React from 'react'

class Timer extends React.Component {
  state = {
    time: {},
    seconds: 5,
    countingDown: false,
    clockStopped: false,
  };

  componentWillMount(){
    this.setState({
      seconds: this.props.min_time
    })
  }


  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.clockSet = this.clockSet.bind(this);
  }

  secondsToTime = (secs) => {
    //converts seconds into minutes, then rounds shaves off the remaining seconds
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    //sets the seconds that would have been shaved off
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    //defines object to be used to set time
    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  clockSet = () => {
    //sets selected tea's min_time to time
    let timeLeftVar = this.secondsToTime(this.props.min_time);
    this.setState({ time: timeLeftVar });
    this.setState({
      countingDown: false,
      clockStopped: false
    })
  }

  componentDidMount() {
    //calls function to set clock
    this.clockSet();
  }

  startTimer = () => {
    // if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({
        countingDown: true
      })
    // }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  //function to stop clock
  stopClock = () => {
    clearInterval(this.timer);
    this.setState({
      clockStopped: true
    })
  }

  resumeTimer = () => {
    this.startTimer();
    this.setState({
      clockStopped: false
    })
  }

  render() {
    return(
      <div>
        m: {this.state.time.m} s: {this.state.time.s}
        {!this.state.countingDown &&
          <button onClick={this.startTimer}>Start</button>
        }
        {this.state.countingDown && !this.state.clockStopped &&
        <button onClick={this.stopClock}>Stop</button>
        }
        {this.state.clockStopped &&
        <button onClick={this.resumeTimer}>Resume</button>
        }
        {this.state.clockStopped &&
        <button onClick={this.clockSet}>Reset</button>
        }
      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default Timer;
