// import axios from 'axios'
// import history from '../history'

// /**
//  * ACTION TYPES
//  */
// const GOT_VENUES = 'GOT_VENUES'

// /**
//  * INITIAL STATE
//  */
// const initialState = {
//   venues: []
// }

// /**
//  * ACTION CREATORS
//  */
// const gotQuiz = venues => ({type: GOT_VENUES, venues})

// /**
//  * THUNK CREATORS
//  */

// export const gettingVenues = () => async dispatch => {
//   const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
//   const parameters = {
//     client_id: 'YTOUTW0MFSVVYABEOEFCPJNPXTMBRY1BMQUHVTRVZMVZT1PN',
//     client_secret: 'SD530C2ZHLQCK44A1SHBJZSYHHXD2NFSDPQNYAULPW2KB2OB',
//     query: 'coffee',
//     near: 'New York',
//     v: '20180323'
//   }
//   try {
//     const res = await axios.get(endPoint + new URLSearchParams(parameters))
//     dispatch(gotQuiz(res.data.response.groups[0].items))
//   } catch (err) {
//     console.error(err)
//   }
// }

// /**
//  * REDUCER
//  */
// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GOT_VENUES:
//       return {...state, venues: action.venues}
//     default:
//       return state
//   }
// }
