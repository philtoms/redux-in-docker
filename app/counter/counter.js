import React from 'react'
import styles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement } from './actions'
import { createSelector } from 'reselect'
import { StepSetterContainer } from './step-setter'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle'


const Counter = ({ count, step, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>
        A container component connected to the Redux store with synchronous dispatches and memoized selectors.
      </p>
      <p className={ styles.counterHeading }>
        Count: <strong>{ count }</strong>
        <br />
        Step: <strong>{ step }</strong>
      </p>
      <RaisedButton className={ styles.counterButton } primary={ true } onClick={ onIncrement } icon={ <AddCircle /> } />
      { ' ' }
      <RaisedButton className={ styles.counterButton } primary={ true } onClick={ onDecrement } icon={ <RemoveCircle /> } />
      <div className={ styles.stepInput }>
        <StepSetterContainer defaultValue={ step } />
      </div>
    </div>
  )
}


const mapStateToProps = createSelector(
  [
    state => state.counter.count,
    state => state.counter.step,
  ],
  // this doesn't need to be memoized; we're just illustrating how reselect works.
  // without this, navigating to and from this route will trigger this function
  (count, step) => ({ count, step })
)

export const CounterContainer = connect(mapStateToProps, {
  // don't pass the event through
  onIncrement() { return increment() },
  onDecrement() { return decrement() },
})(Counter)
