import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_LOCATION = 'GET_LOCATION'
/**
 * INITIAL STATE
 */
const initialState = {
  user: {},
  myLocation: {}
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const gotLocation = myLocation => ({type: GET_LOCATION, myLocation})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const getLocation = () => async dispatch => {
  try {
    const res = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDU4lLRMSBMlKtCbV0PoOEDF6TaNIac6Ck`
    )
    dispatch(gotLocation(res.data))
  } catch (err) {
    console.err(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user}
    case REMOVE_USER:
      return {...state, user: {}}
    case GET_LOCATION:
      return {...state, myLocation: action.myLocation}
    default:
      return state
  }
}
