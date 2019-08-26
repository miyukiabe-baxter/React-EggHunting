import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import {updatingScore, changingQuizVisibility} from '../store/quiz'

class QuizContainer extends Component {
  constructor() {
    super()
    this.state = {
      correct: false,
      wrong: false,
      button: false
    }
  }
  checkAnswer = event => {
    this.setState({button: true})
    if (this.props.currentQuiz.correct_answer === event.target.value) {
      this.props.addScore(1)
      this.setState({correct: !this.state.correct})
      setTimeout(this.nextQuiz, 1000)
    } else {
      this.setState({wrong: !this.state.correct})
      setTimeout(this.nextQuiz, 4000)
    }
  }

  nextQuiz = () => {
    this.props.changeQuizStatus(!this.props.currentQuizStatus)
  }

  render() {
    const solveThis = this.props.currentQuiz
    const correctAnswer = this.props.currentQuiz.correct_answer
    return (
      <div>
        <h5>{solveThis.question}</h5>
        {solveThis.multiQuiz.map(choice => {
          return (
            <Button
              key={choice.id}
              id={choice.id}
              type="button"
              color="info"
              value={choice.choice}
              disabled={this.state.button}
              onClick={value => this.checkAnswer(value)}
            >
              {choice.choice}
            </Button>
          )
        })}
        {this.state.correct && <h5>Correct!!</h5>}
        {this.state.wrong && <h5>Wrong! "{correctAnswer}" is the answer</h5>}
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
