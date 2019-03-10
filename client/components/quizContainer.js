import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import {gettingOneQuiz} from '../store/quiz'
import {generateRandomNum, checkAnswer} from '../utility'

class QuizContainer extends Component {
  constructor(props) {
    super(props)
  }

  checkAnswer = event => {
    console.log('clicked!', event.target.value)
    console.log('do I have a quiz>>>', this.props.currentQuiz)
  }

  render() {
    // console.log('a id', this.props.currentQuiz.aQuiz.id)
    // const {question, multiQuiz} = this.props.currentQuiz.aQuiz
    const quiz = this.props.currentQuiz.aQuiz
    console.log('a qui', quiz)

    return (
      <div>
        {' '}
        yo yo yo yo yo
        {/* <h4>{question}</h4>
        {multiQuiz.map(choice => {
          return (
            <Button
              key={choice.id}
              color="info"
              value={choice.choice}
              onClick={(value) => this.checkAnswer(value)}
            >
              {choice.choice}
            </Button>
          )
        })} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentQuiz: state.quiz.aQuiz
})

// const mapStateToDispatch = dispatch => ({
//   setOneQuiz: quiz => dispatch(gettingOneQuiz(quiz))
// })

export default connect(mapStateToProps, null)(QuizContainer)
