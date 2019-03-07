import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_QUIZZES = 'GOT_QUIZZES'

/**
 * INITIAL STATE
 */
const initialState = {
  quizzes: []
}

/**
 * ACTION CREATORS
 */
const gotQuiz = quizzes => ({type: GOT_QUIZZES, quizzes})

/**
 * THUNK CREATORS
 */

export const gettingQuizzes = () => async dispatch => {
  try {
    const endPoint = 'https://opentdb.com/api.php?amount=20&category=18'
    const res = await axios.get(endPoint)
    dispatch(gotQuiz(res.data.results))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_QUIZZES:
      return {...state, quizzes: action.quizzes}
    default:
      return state
  }
}
