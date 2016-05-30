import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { changeStep } from './actions'
import { connect } from 'react-redux'
import { toNumber, inRange } from 'lodash'


const STEP_MIN = 1
const STEP_MAX = 11

class StepSetter extends Component {
  constructor(props) {
    super(props)
    this.onChange = this::this.onChange
    this.state = { errorText: null, step: this.props.initialStep }
  }

  onChange(event) {
    let step = toNumber(event.target.value)
    let errorText
    if (inRange(step, STEP_MIN, STEP_MAX)) {
      this.props.dispatch(changeStep(step))
      errorText = null
    } else {
      errorText = 'Type a number between 1 and 10'
    }
    this.setState({ errorText, step })
  }

  render() {
    return (<TextField
      type='number' onChange={ this.onChange } floatingLabelText='Set increment/decrement step'
      min={ STEP_MIN } max={ STEP_MAX } value={ this.state.step } errorText={ this.state.errorText } required='true' />)
  }
}

export const StepSetterContainer = connect()(StepSetter)
