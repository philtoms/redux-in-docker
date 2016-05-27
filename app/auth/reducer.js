import { AUTH } from './actions'
import { handleAction } from 'redux-actions'
import { AuthService } from './service'



export const authReducer = handleAction(AUTH,
  {
    next(state, action) {
      return { ...state, loggedInUser: action.payload }
    },

    throw() {
      return { loggedInUser: null }
    },
  },
  {
    loggedInUser: AuthService.authenticated ? AuthService.profile : null,
  },
)
