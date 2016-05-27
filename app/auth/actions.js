import { AuthService } from './service'
import { createAction } from 'redux-actions'


export const AUTH = 'AUTH'
export const auth = createAction(AUTH)

export const logInThunk = () => {
  return dispatch => {
    return AuthService.logIn()
      .then(profile => {
        return dispatch(auth(profile))
      })
      .catch(error => {
        if (!(error instanceof Error)) {
          error = new Error(error)
        }
        return dispatch(auth(error))
      })
  }
}


export function logOutThunk() {
  return dispatch => {
    return AuthService.logOut().then(() => dispatch(auth(null)))
  }
}
