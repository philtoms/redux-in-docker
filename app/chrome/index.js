import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarContainer } from './navbar'
import { Lock } from 'auth'


class Chrome extends Component {
  render() {
    const { loggedInUser } = this.props
    if (loggedInUser) {
      return (<NavbarContainer loggedInUser={ loggedInUser } />)
    }
    return (<Lock></Lock>)
  }
}


export const ChromeContainer = connect(state => {
  return { loggedInUser: state.loggedInUser }
})(Chrome)
