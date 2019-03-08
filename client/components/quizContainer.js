import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

export class QuizContainer extends Component {
  render() {
    // const randomNum = Math.floor(Math.random()*20)
    // console.log('im inside quiz component', this.props.trivias[randomNum])
    return (
      <Form>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
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
