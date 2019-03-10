import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import {
  gettingOneQuiz,
  updatingScore,
  changingQuizVisibility
} from '../store/quiz'
import {generateRandomNum, checkAnswer} from '../utility'

class QuizContainer extends Component {
  constructor(props) {
    super(props)
  }

  checkAnswer = event => {
    console.log('have to store a quiz in store.')
  }

  render() {
    // console.log('a id', this.props.currentQuiz.aQuiz.id)
    // const {question, multiQuiz} = this.props.currentQuiz.aQuiz
    // const quiz = this.props.currentQuiz.aQuiz
    // console.log('a qui', quiz)
    const {trivias} = this.props
    const quiz = trivias[Math.floor(Math.random() * trivias.length - 1)]
    quiz.multiQuiz = generateRandomNum(
      quiz.incorrect_answers.concat(quiz.correct_answer)
    )
    // this.props.setOneQuiz(quiz)
    console.log('am i getting a quiz', quiz)

    //   checkAnswer = event => {
    //     if (event.target.value === quiz.correct_answer){
    //       this.props.addScore(1)
    //       this.props.changeQuizStatus(!this.props.currentQuizStatus)
    //     }else {
    //       console.log('wrong!!!!!')
    //     }
    // }

    return (
      <div>
        <h5>{quiz.question}</h5>
        {quiz.multiQuiz.map(choice => {
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
  currentQuiz: state.quiz.aQuiz
})

const mapStateToDispatch = dispatch => ({
  changeQuizStatus: status => dispatch(changingQuizVisibility(status)),
  addScore: num => dispatch(updatingScore(num))
})

export default connect(mapStateToProps, mapStateToDispatch)(QuizContainer)
