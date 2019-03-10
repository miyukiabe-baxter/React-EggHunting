import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_QUIZZES = 'GOT_QUIZZES'
const UPDATE_SCORE = 'UPDATE_SCORE'

/**
 * INITIAL STATE
 */
const initialState = {
  quizzes: [],
  score: 0
}

/**
 * ACTION CREATORS
 */
const gotQuiz = quizzes => ({type: GOT_QUIZZES, quizzes})
const updatedScore = score => ({type: UPDATE_SCORE, score})
/**
 * THUNK CREATORS
 */

export const gettingQuizzes = level => async dispatch => {
  try {
    const res = await axios.get(`/api/quiz/${level}`)
    dispatch(gotQuiz(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updatingScore = score => async dispatch => {
  try {
    dispatch(updatedScore(score))
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
    case UPDATE_SCORE:
      return {...state, score: state.score + action.score}
    default:
      return state
  }
}
