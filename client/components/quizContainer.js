import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

export class QuizContainer extends Component {
  render() {
    // const randomNum = Math.floor(Math.random()*20)
    // console.log('im inside quiz component', this.props.trivias[randomNum])
    return (
      <Form>
        <FormGroup tag="fieldset">
          <legend>Pick Level</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Easy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" /> Hard
            </Label>
          </FormGroup>
        </FormGroup>
        <Button outline color="warning">
          Start Game
        </Button>
      </Form>
    )
  }
}

// const mapStateToProps = state => ({
//   trivias: state.quiz.quizzes
// })

// const mapStateToDispatch = dispatch => ({
//   getTrivia: () => dispatch(gettingQuizzes()),
//   getVenues: () => dispatch(gettingVenues())
// })

// export default connect(mapStateToProps, null)(QuizContainer)

export default connect(null, null)(QuizContainer)
