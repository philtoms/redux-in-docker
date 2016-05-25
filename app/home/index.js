import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarContainer } from './navbar'
import { Lock } from 'auth'


class Home extends Component {
  render() {
    const { loggedInUser } = this.props
    if (loggedInUser) {
      return (<NavbarContainer loggedInUser={ loggedInUser } />)
    }
    return (<Lock></Lock>)
  }
}


export const HomeContainer = connect(state => {
  return { loggedInUser: state.loggedInUser }
})(Home)
