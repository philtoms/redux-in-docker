import { createAction } from 'redux-actions'


export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const decrement = createAction(DECREMENT)
export const increment = createAction(INCREMENT)
