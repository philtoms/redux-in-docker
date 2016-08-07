import React, { Component, PropTypes } from 'react'
import { logOutThunk } from 'auth'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton/IconButton'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'
import { NavLink } from 'common'
import styles from './navbar.scss'

@connect(
  undefined,
  { onLogOutClick: logOutThunk }
)
export default class Navbar extends Component {
  static propTypes = {
    onLogOutClick: PropTypes.func.isRequired,
    loggedInUser: PropTypes.object,
  }

  clickLogOut = event => {
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
              <NavLink
                to='/'
                onlyActiveOnIndex>
                <ActionHome
                  className={ styles.homeIcon }
                  color='#455A64' />
              </NavLink>
            </li>
            <li><NavLink to='/counter'>Counter</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
          </ul>
        </div>
        <div className={ styles.navmenu }>
          {
            authenticated
            ? <span>Hi <strong>{ loggedInUser.name }</strong>!</span>
            : ''
          }
          <IconMenu
            iconButtonElement={ <IconButton><Avatar src={ authenticated ? loggedInUser.picture : '' }
                                                    className={ styles.navmenuAvatar } /></IconButton> }
            targetOrigin={ { horizontal: 'right', vertical: 'bottom' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'top' } }>
            <MenuItem
              primaryText="Sign out"
              onClick={ this.clickLogOut }
              disabled={ !authenticated } />
          </IconMenu>
        </div>
      </div>
    )
  }
}
