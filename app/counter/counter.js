import React from 'react'
import styles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'




const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>An example of a "container component" connected to the Redux store with synchronous dispatches.</p>
      <p className={ styles.counterHeading }>Clicked <strong>{ count }</strong> times.</p>
      <RaisedButton className={ styles.counterButton } primary={ true } label={ '+' } onClick={ onIncrement }></RaisedButton>
      { ' ' }
      <RaisedButton className={ styles.counterButton } primary={ true } label={ '-' } onClick={ onDecrement }></RaisedButton>
      <div>
        <p className={ styles.counterCodeHeading }><strong>Code:</strong></p>
        <pre style={ { marginTop: 0 } }>
        { `
import { connect } from 'react-redux'


export const CounterContainer = connect(
  ({ counter }) => {
    return { count: counter.count }
  },
  dispatch => {
    return {
      onIncrement: () => dispatch(increment()),
      onDecrement: () => dispatch(decrement()),
    }
  })(Counter)
` }
        </pre>
      </div>
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
