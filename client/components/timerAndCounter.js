import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

class TimerAndCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingMinutes: 5,
      remainingSeconds: 0
    }
  }

  componentDidMount() {
    this.countDown()
  }

  updateRemainMinutesAndSeconds(timeRemainingInSeconds) {
    // let remainingMinutes = Math.floor(timeRemainingInSeconds/60);
    let remainingSeconds = timeRemainingInSeconds % 60
    this.setState({
      remainingMinutes,
      remainingSeconds
    })
  }

  countDown = (timeRemainingInSeconds, shouldSkipCallback) => {
    this.setState({
      timeRemainingInSeconds
    })
    if (!shouldSkipCallback && timeRemainingInSeconds % 60 === 0) {
      this.props.onEveryMinute(1)
    }
    if (timeRemainingInSeconds === 0) {
      this.props.onCompletion()
    }
    localStorage.setItem('timeRemainingInSeconds', timeRemainingInSeconds)
    if (timeRemainingInSeconds > 0) {
      this.updateRemainMinutesAndSeconds(timeRemainingInSeconds)
      timeRemainingInSeconds = timeRemainingInSeconds - 1
      this.setTimeoutId = setTimeout(
        this.countDown.bind(this, timeRemainingInSeconds, false),
        1000
      )
    }
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeoutId)
  }

  render() {
    return (
      <div className="timer">
        <div>
          <div className="font-weight-bold lead number-display">
            {this.state.remainingMinutes > 9
              ? this.state.remainingMinutes
              : '0' + this.state.remainingMinutes}:{this.state
              .remainingSeconds > 9
              ? this.state.remainingSeconds
              : '0' + this.state.remainingSeconds}
          </div>
        </div>
        <div>
          <h5>Score: {this.props.currentScore}</h5>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentScore: state.quiz.score
})

// const mapStateToDispatch = dispatch => ({
//   getTrivia: level => dispatch(gettingQuizzes(level)),
//   currentLocation: () => dispatch(getLocation())
// })

export default connect(mapStateToProps, null)(TimerAndCounter)
