import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'navbar'
import { Lock } from 'auth'


class VisualHome extends Component {
  static get propTypes() {
    return { loggedInUser: PropTypes.string }
  }

  render() {
    const { loggedInUser } = this.props
    if (loggedInUser) {
      return (<Navbar loggedInUser={ loggedInUser } />)
    }
    return (<Lock></Lock>)
  }
}


export const Home = connect(state => {
  return { loggedInUser: state.loggedInUser }
})(VisualHome)
