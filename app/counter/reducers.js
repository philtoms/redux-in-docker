import { INCREMENT, DECREMENT, CHANGE_STEP } from './actions'
import { makeActionReducers } from 'redux-standard-actions'

export default makeActionReducers({
  [INCREMENT]: ({ count, step }) => ({ count: count + step, step }),
  [DECREMENT]: ({ count, step }) => ({ count: count - step, step }),
  [CHANGE_STEP]: ({ count }, { payload }) => ({ count, step: payload }),
}, { count: 0, step: 1 })

export function getStep(state) {
  return state.counter.step
}

export function getCount(state) {
  return state.counter.count
}
