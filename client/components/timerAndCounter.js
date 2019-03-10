import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

const TimerAndCounter = props => {
  return (
    <div>
      <h4>I need timer and counter</h4>

      <p id="timer">5:00</p>

      <h5>Score: {props.currentScore}</h5>
    </div>
  )
}

const mapStateToProps = state => ({
  currentScore: state.quiz.score
})

// const mapStateToDispatch = dispatch => ({
//   getTrivia: level => dispatch(gettingQuizzes(level)),
//   currentLocation: () => dispatch(getLocation())
// })

export default connect(mapStateToProps, null)(TimerAndCounter)
