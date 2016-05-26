import React, { Component } from 'react'
import { logOut } from 'auth'
import { connect } from 'react-redux'
import { NavLink } from './navlink'
import styles from './navbar.scss'




class Navbar extends Component {
  constructor() {
    super()
    this.clickLogOut = this::this.clickLogOut
  }

  clickLogOut(event) {
    event.preventDefault()
    this.props.onLogOutClick()
  }

  render() {
    const { loggedInUser } = this.props
    const logOutLink = loggedInUser ? <a href='' onClick={ this.clickLogOut }>Log out</a> : null
    return (
      <div id={ styles.navbar }>
        {
          loggedInUser
          ? `Logged in as ${loggedInUser} `
          : 'Logged out'
        }
        { logOutLink }
        <ul>
          <li><NavLink to='/example'>Example</NavLink></li>
          <li><NavLink to='/'>Home</NavLink></li>
        </ul>
      </div>
    )
  }
}

export const NavbarContainer = connect(
  state => {
    return { loggedInUser: state.auth.loggedInUser }
  },
  dispatch => {
    return {
      onLogOutClick() {
        return dispatch(logOut())
      },
    }
  },
)(Navbar)
