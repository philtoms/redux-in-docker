import React, { Component } from 'react'
import { logOut } from 'auth'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
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
    return (
      <div className={ styles.navbar }>
        <div className={ styles.navlinks }>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/example'>Example</NavLink></li>
          </ul>
        </div>
        <div className={ styles.navmenu }>
          {
            loggedInUser
            ? <span>Hi <strong>{ loggedInUser }</strong>!</span>
            : ''
          }
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
            targetOrigin={ { horizontal: 'right', vertical: 'bottom' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'top' } }>
            <MenuItem primaryText="Sign out" onClick={ this.clickLogOut } disabled={ !loggedInUser } />
          </IconMenu>
        </div>
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
