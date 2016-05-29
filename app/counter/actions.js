import { createAction } from 'redux-actions'


export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_STEP = 'CHANGE_STEP'

export const decrement = createAction(DECREMENT)
export const increment = createAction(INCREMENT)
export const changeStep = createAction(CHANGE_STEP)
