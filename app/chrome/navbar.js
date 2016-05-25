import React, { Component } from 'react'
import { logOut } from 'auth'
import { connect } from 'react-redux'


class Navbar extends Component {
  clickLogOut(event) {
    event.preventDefault()
    this.props.onLogOutClick()
  }

  render() {
    return (
      <div>
        Logged In as { this.props.loggedInUser }
        { ' ' }
        <a href='' onClick={ (event) => this.clickLogOut(event) }>Log Out</a>
        { this.props.children }
      </div>
    )
  }
}

export const NavbarContainer = connect(
  state => {
    return { loggedInUser: state.loggedInUser }
  },
  dispatch => {
    return {
      onLogOutClick() {
        return dispatch(logOut())
      },
    }
  },
)(Navbar)
