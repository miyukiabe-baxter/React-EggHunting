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

export const gettingQuizzes = () => dispatch => {
  try {
    // const endPoint = 'https://opentdb.com/api.php?amount=50&category=18&type=multiple'
    // const endPoint = 'https://opentdb.com/api.php?amount=10&type=boolean'
    // const endPoint =  'https://opentdb.com/api.php?amount=20&category=19&type=multiple'
    // const res = axios.get(endPoint).then((data) => {axios.post('/api/quiz', data.data.results)})
    const res = axios.get('/api/quiz')
    dispatch(gotQuiz(res.data))
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
