import { isTokenExpired } from './jwt-helper'


const LOCK = new Auth0Lock('bjYFOXFKLHYDDg6x4q4B3fd0DnrIrwDI', 'arivale.auth0.com')
const LOCK_OPTIONS = {
  connection: 'arivale-com',
  authParams: {
    scope: 'openid roles',
  },
  closable: false,
  focusInput: false,
  disableSignupAction: true,
  disableResetAction: true,
  gravatar: false,
  icon: 'assets/images/arivale-logo.png',
  dict: {
    signin: {
      title: 'React Starter App',
      emailPlaceholder: 'you@arivale.com',
      action: 'Sign in',
    },
  },
}
const LOCAL_STORAGE_PROFILE_KEY = 'profile'
const LOCAL_STORAGE_TOKEN_KEY = 'token'

export const AuthService = Object.create(null, {
  authenticated: {
    get() {
      const token = this.token
      if (!this.profile || !token) {
        return false
      }
      return !isTokenExpired(token)
    },
  },

  lock: {
    get() {
      return LOCK
    },
  },

  profile: {
    get() {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY))
    },
    set(profile) {
      localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, profile)
    },
  },

  logOut: {
    value() {
      localStorage.removeItem(LOCAL_STORAGE_PROFILE_KEY)
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
      return Promise.resolve()
    },
  },

  logIn: {
    value() {
      return new Promise((resolve, reject) => {
        return this.lock.showSignin(LOCK_OPTIONS, (error, profile, token) => {
          if (error) {
            return reject(error)
          }
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('token', token)
          return resolve(profile)
        })
      })
    },
  },

  token: {
    get() {
      return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    },
    set(token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
    },
  },
})
