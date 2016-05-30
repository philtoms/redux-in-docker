import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { changeStep } from './actions'
import { connect } from 'react-redux'
import { toNumber, inRange } from 'lodash'


const STEP_MIN = 1
const STEP_MAX = 11

class StepSetter extends Component {
  constructor() {
    super()
    this.onChange = this::this.onChange
    this.state = { errorText: null }
  }

  onChange(event) {
    let step = toNumber(event.target.value)
    if (inRange(step, STEP_MIN, STEP_MAX)) {
      this.props.dispatch(changeStep(step))
      this.setState({ errorText: null })
    } else {
      this.setState({ errorText: 'Type a number between 1 and 10' })
    }
  }

  render() {
    return (<TextField
      type='number' onChange={ this.onChange } floatingLabelText='Set increment/decrement step'
      min={ STEP_MIN } max={ STEP_MAX } defaultValue={ this.props.defaultValue } errorText={ this.state.errorText } required='true' />)
  }
}

export const StepSetterContainer = connect()(StepSetter)
