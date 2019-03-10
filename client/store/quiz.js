import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_QUIZZES = 'GOT_QUIZZES'
const GOT_ONE_QUIZ = 'GOT_ONE_QUIZ'
const UPDATE_SCORE = 'UPDATE_SCORE'
const IS_QUIZ_HIDDEN = 'IS_QUIZ_HIDDEN'

/**
 * INITIAL STATE
 */
const initialState = {
  quizzes: [],
  // aQuiz: {},
  score: 0,
  isQuizHidden: true
}

/**
 * ACTION CREATORS
 */
const gotQuizzes = quizzes => ({type: GOT_QUIZZES, quizzes})
// const gotOneQuiz = aQuiz => ({type: GOT_ONE_QUIZ, aQuiz})
const updatedScore = score => ({type: UPDATE_SCORE, score})
const isQuizHidden = status => ({type: IS_QUIZ_HIDDEN, status})
/**
 * THUNK CREATORS
 */

export const gettingQuizzes = level => async dispatch => {
  try {
    console.log('level', level)
    const res = await axios.get(`/api/quiz/${level}`)

    dispatch(gotQuizzes(res.data))
  } catch (err) {
    console.error(err)
  }
}

// export const gettingOneQuiz = quiz => async dispatch => {
//   try {
//     dispatch(gotOneQuiz(quiz))
//   } catch (err) {
//     console.error(err)
//   }
// }

export const updatingScore = score => async dispatch => {
  try {
    dispatch(updatedScore(score))
  } catch (err) {
    console.err(err)
  }
}

export const changingQuizVisibility = status => async dispatch => {
  try {
    dispatch(isQuizHidden(status))
  } catch (err) {
    console.err(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_QUIZZES:
      return {...state, quizzes: action.quizzes}
    // case GOT_ONE_QUIZ:
    //   return {...state, aQuiz: action}
    case UPDATE_SCORE:
      return {...state, score: state.score + action.score}
    case IS_QUIZ_HIDDEN:
      return {...state, isQuizHidden: action.status}
    default:
      return state
  }
}
