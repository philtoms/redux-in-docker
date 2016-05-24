import { noop } from 'lodash'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer, AuthService } from 'auth'

const store = createStore(
  authReducer,
  { loggedInUser: AuthService.authenticated ? AuthService.profile.email : null },
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : noop
  )
)

export default store
