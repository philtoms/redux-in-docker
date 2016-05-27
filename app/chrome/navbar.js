import React, { Component } from 'react'
import { logOutThunk } from 'auth'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton/IconButton'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'
import { NavLink } from 'util'
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
            <li>
              <NavLink to='/' onlyActiveOnIndex={ true }>
                <ActionHome className={ styles.homeIcon } color='#455A64'></ActionHome>
              </NavLink>
            </li>
            <li><NavLink to='/example'>Component Example</NavLink></li>
            <li><NavLink to='/dummy-route-1'>Dummy Route 1</NavLink></li>
            <li><NavLink to='/dummy-route-2'>Dummy Route 2</NavLink></li>
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
  (state, ownProps) => ownProps,
  dispatch => {
    return {
      onLogOutClick() {
        return dispatch(logOutThunk())
      },
    }
  },
)(Navbar)
