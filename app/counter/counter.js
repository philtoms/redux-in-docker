import React, { PropTypes } from 'react'
import styles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import { getCount, getStep } from './reducers'
import StepSetter from './step-setter'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle'

const Counter = ({ count, step, onIncrement, onDecrement }) => {
  function decrementWithStep() {
    onDecrement(step)
  }
  function incrementWithStep() {
    onIncrement(step)
  }
  return <div>
    <p>
      A container component connected to the Redux store with synchronous dispatches.
    </p>
    <p className={ styles.counterHeading }>
      Count: <strong>{ count }</strong>
      <br />
      Step: <strong>{ step }</strong>
    </p>
    <RaisedButton
      className={ styles.counterButton }
      primary
      onClick={ incrementWithStep }
      icon={ <AddCircle /> } />
    { ' ' }
    <RaisedButton
      className={ styles.counterButton }
      primary
      onClick={ decrementWithStep }
      icon={ <RemoveCircle /> } />
    <div className={ styles.stepInput }>
      <StepSetter />
    </div>
  </div>
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default connect(
  state => ({ count: getCount(state), step: getStep(state) }),
  dispatch => ({ dispatch }),
  (stateProps, { dispatch }, ownProps) => ({
  ...stateProps,
  ...ownProps,
  onIncrement: () => dispatch(increment(stateProps.step)),
  onDecrement: () => dispatch(decrement(stateProps.step)),
}))(Counter)
