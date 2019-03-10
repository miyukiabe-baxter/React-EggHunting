import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import {updatingScore, changingQuizVisibility} from '../store/quiz'

class QuizContainer extends Component {
  checkAnswer = event => {
    if (this.props.currentQuiz.correct_answer === event.target.value) {
      this.props.addScore(1)
      this.props.changeQuizStatus(!this.props.currentQuizStatus)
    } else {
      console.log('you are worng!!!!!!!!!!')
    }
  }

  render() {
    const solveThis = this.props.currentQuiz

    return (
      <div>
        <h5>{solveThis.question}</h5>
        {solveThis.multiQuiz.map(choice => {
          return (
            <Button
              key={choice.id}
              color="info"
              value={choice.choice}
              onClick={value => this.checkAnswer(value)}
            >
              {choice.choice}
            </Button>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trivias: state.quiz.quizzes,
  currentQuiz: state.quiz.aQuiz.aQuiz,
  currentQuizStatus: state.quiz.isQuizHidden
})

const mapStateToDispatch = dispatch => ({
  changeQuizStatus: status => dispatch(changingQuizVisibility(status)),
  addScore: num => dispatch(updatingScore(num))
})

export default connect(mapStateToProps, mapStateToDispatch)(QuizContainer)
