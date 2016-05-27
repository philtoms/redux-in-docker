import { INCREMENT, DECREMENT } from './actions'
import { handleActions } from 'redux-actions'


export const counterReducer = handleActions({
  [INCREMENT]: (state, action) => ({ count: state.count + action.payload }),
  [DECREMENT]: (state, action) => ({ count: state.count - action.payload }),
}, { count: 0 })
