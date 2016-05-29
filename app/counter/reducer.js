import { INCREMENT, DECREMENT, CHANGE_STEP } from './actions'
import { handleActions } from 'redux-actions'


export const counterReducer = handleActions({
  [INCREMENT]: ({ count, step }) => ({ count: count + step, step }),
  [DECREMENT]: ({ count, step }) => ({ count: count - step, step }),
  [CHANGE_STEP]: ({ count }, { payload }) => ({ count, step: payload }),
}, { count: 0, step: 1 })
