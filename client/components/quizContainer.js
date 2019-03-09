import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import {gettingQuizzes} from '../store/quiz'

class QuizContainer extends Component {
  constructor(props) {
    super(props)
  }

  generateRandomNum = choices => {
    const idxArr = []
    const multipleChoice = []
    while (idxArr.length < 4) {
      let num = Math.floor(Math.random() * 4)
      if (idxArr.indexOf(num) === -1) idxArr.push(num)
    }
    for (let i = 0; i < idxArr.length; i++) {
      multipleChoice.push({
        id: i,
        choice: choices[i]
      })
    }
    return multipleChoice
  }

  // checkAnswer = (event) => {

  //   console.log('im checking your anser', event.target.value)
  //   console.log('im checking your anser',choices)
  // }

  render() {
    const {quizzes} = this.props
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length - 1)]
    const choices = quiz.incorrect_answers.concat(quiz.correct_answer)
    const multi = this.generateRandomNum(choices)

    const checkAnswer = event => {
      if (event.target.value === quiz.correct_answer) {
        console.log('you got correct Answer')
      } else {
        console.log('Wrong!!!!!!!!')
      }
    }

    return (
      <div>
        <h4>{quiz.question}</h4>
        {multi.map(choice => {
          return (
            <Button
              key={choice.id}
              color="info"
              value={choice.choice}
              onClick={value => checkAnswer(value)}
            >
              {choice.choice}
            </Button>
          )
        })}
      </div>
    )
  }
}

export default connect(null, null)(QuizContainer)
