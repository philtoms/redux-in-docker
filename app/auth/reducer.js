import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './actions'
import { AuthService } from './service'



export function authReducer(
  state = { loggedInUser: AuthService.authenticated ? AuthService.profile.email : null },
  action
) {
  const { type } = action
  if (type === LOGOUT || type === LOGIN_FAILURE) {
    return Object.assign({}, state, { loggedInUser: null })
  } else if (type === LOGIN_SUCCESS) {
    return Object.assign({}, state, { loggedInUser: action.loggedInUser })
  }
  return state
}
