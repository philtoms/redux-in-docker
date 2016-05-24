import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './actions'


export function authReducer(state = {}, action) {
  const { type } = action
  if (type === LOGOUT || type === LOGIN_FAILURE) {
    return Object.assign({}, state, { loggedInUser: null })
  } else if (type === LOGIN_SUCCESS) {
    return Object.assign({}, state, { loggedInUser: action.loggedInUser })
  }
  return state
}
