import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

import {generateRandomNum} from '../utility'

class QuizContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {quizzes} = this.props
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length - 1)]
    const choices = quiz.incorrect_answers.concat(quiz.correct_answer)
    const multi = generateRandomNum(choices)

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
