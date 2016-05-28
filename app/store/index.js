import { identity } from 'lodash'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { counterReducer } from 'counter'
import { routerReducer } from 'react-router-redux'


const store = createStore(
  combineReducers({ counter: counterReducer, routing: routerReducer }),
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : identity
  )
)

export default store
