import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

class TimerAndCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingMinutes: 1,
      remainingSeconds: 0,
      gameOver: true
    }
    this.secondsRemaining
    this.intervalHandle
  }

  componentDidMount() {
    this.startCountDown()
  }

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60)
    var sec = this.secondsRemaining - min * 60
    if (min === 0 && sec === 0) {
      this.setState({gameOver: false})
      this.setState({
        remainingMinutes: 0,
        remainingSeconds: 0
      })
    } else {
      this.setState({
        remainingMinutes: min,
        remainingSeconds: sec
      })
      this.secondsRemaining--
    }
  }

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000)
    let time = this.state.remainingMinutes
    this.secondsRemaining = time * 60
  }

  render() {
    return (
      <div className="timer">
        <div>
          <h5>
            {this.state.remainingMinutes > 9
              ? this.state.remainingMinutes
              : '0' + this.state.remainingMinutes}:{this.state
              .remainingSeconds > 9
              ? this.state.remainingSeconds
              : '0' + this.state.remainingSeconds}
          </h5>
          {!this.state.gameOver && <h3>GAME OVER</h3>}
        </div>
        <div>
          <h5>Score: {this.props.currentScore}</h5>
        </div>
        <div className="startGame">
          <Button color="success" onClick={this.props.resetGame}>
            End Game
          </Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentScore: state.quiz.score
})

export default connect(mapStateToProps, null)(TimerAndCounter)
