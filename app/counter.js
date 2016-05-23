import React, { Component } from 'react'
import counterStyles from './counter.scss'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.increment(), 1000)
  }

  increment() {
    this.setState(({ counter }) => {
      if (counter > 5) {
        return { counter: 0 }
      }
      return { counter: counter + 1 }
    })
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state

    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>Hello, World!</div>
        <div className={ counterStyles.counter }>{ counter }</div>
      </header>
    )
  }
}
