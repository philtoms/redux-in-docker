import { makeActionCreators } from 'redux-standard-actions'
import { getStep } from './reducers'

export const { increment, decrement, changeStep } = makeActionCreators(
  'INCREMENT',
  'DECREMENT',
  'CHANGE_STEP'
)

export function incrementThunk() {
  return (dispatch, getState) => dispatch(increment(getStep(getState())))
}

export function decrementThunk() {
  return (dispatch, getState) => dispatch(decrement(getStep(getState())))
}
