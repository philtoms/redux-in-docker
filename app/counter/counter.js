import React from 'react'
import styles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle'


const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>An example of a "container component" connected to the Redux store with synchronous dispatches.</p>
      <p className={ styles.counterHeading }>Clicked <strong>{ count }</strong> times.</p>
      <RaisedButton className={ styles.counterButton } primary={ true } onClick={ onIncrement } icon={ <AddCircle /> } />
      { ' ' }
      <RaisedButton className={ styles.counterButton } primary={ true } onClick={ onDecrement } icon={ <RemoveCircle /> } />
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
