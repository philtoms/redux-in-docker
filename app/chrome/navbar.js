import React, { Component } from 'react'
import { logOut } from 'auth'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton/IconButton'
import Avatar from 'material-ui/Avatar'
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
    const authenticated = !!loggedInUser
    return (
      <div className={ styles.navbar }>
        <div className={ styles.navlinks }>
          <ul>
            <li><NavLink to='/'><ActionHome className={ styles.homeIcon }></ActionHome></NavLink></li>
            <li><NavLink to='/example'>Example</NavLink></li>
          </ul>
        </div>
        <div className={ styles.navmenu }>
          {
            authenticated
            ? <span>Hi <strong>{ loggedInUser.name }</strong>!</span>
            : ''
          }
          <IconMenu
            iconButtonElement={ <IconButton><Avatar src={ authenticated ? loggedInUser.picture : '' } className={ styles.navmenuAvatar } /></IconButton> }
            targetOrigin={ { horizontal: 'right', vertical: 'bottom' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'top' } }>
            <MenuItem primaryText="Sign out" onClick={ this.clickLogOut } disabled={ !authenticated } />
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
