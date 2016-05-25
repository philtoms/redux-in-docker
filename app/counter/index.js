import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import counterStyles from './counter.scss'
import RaisedButton from 'material-ui/RaisedButton'


export class Counter extends Component {
  incrementIfOdd() {
    if (this.props.count % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    window.setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props
    return (
      <div>
        <AppBar title="React Starter App" />
        <p className={ counterStyles.counter }>
          Clicked {count} times
        </p>
        <RaisedButton className={ counterStyles.counterButton } primary={true} label={'+'} onClick={onIncrement}></RaisedButton>
        {' '}
        <RaisedButton className={ counterStyles.counterButton } primary={true} label={'-'} onClick={onDecrement}></RaisedButton>
        {' '}
        <RaisedButton className={ counterStyles.counterButton } secondary={true} label={'+ if odd'} onClick={() => this.incrementIfOdd()}></RaisedButton>
        {' '}
        <RaisedButton className={ counterStyles.counterButton } secondary={true} label={'+ async'} onClick={() => this.incrementAsync()}></RaisedButton>
      </div>
    )
  }
}

export { counterReducer } from './reducer'
export { increment, decrement } from './actions'
