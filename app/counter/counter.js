import React from 'react'
import counterStyles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'




const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>An example of a "container component" connected to the Redux store.</p>
      <p className={ counterStyles.counter }>
        Clicked <strong>{ count }</strong> times.
      </p>
      <RaisedButton className={ counterStyles.counterButton } primary={ true } label={ '+' } onClick={ onIncrement }></RaisedButton>
      { ' ' }
      <RaisedButton className={ counterStyles.counterButton } primary={ true } label={ '-' } onClick={ onDecrement }></RaisedButton>
    </div>
  )
}


export const CounterContainer = connect(({ counter }) => {
  return { count: counter.count }
}, dispatch => {
  return {
    onIncrement() {
      return dispatch(increment())
    },
    onDecrement() {
      return dispatch(decrement())
    },
  }
})(Counter)
