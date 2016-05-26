import { AuthService } from './service'


export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loggedOut = () => {
  return {
    type: LOGOUT,
    loggedInUser: null,
  }
}

const logInSuccess = profile => {
  return {
    type: LOGIN_SUCCESS,
    loggedInUser: profile,
  }
}

const logInFailure = error => {
  return {
    type: LOGIN_FAILURE,
    loggedInUser: null,
    error,
  }
}


export function logIn() {
  return dispatch => {
    return AuthService.logIn()
      .then(profile => {
        return dispatch(logInSuccess(profile))
      })
      .catch(error => {
        return dispatch(logInFailure(error))
      })
  }
}

export function logOut() {
  return dispatch => {
    return AuthService.logOut().then(() => dispatch(loggedOut()))
  }
}
