import React from 'react'
import ActionHome from 'material-ui/svg-icons/action/home'
import { connect } from 'react-redux'
import { NavLink } from 'util'
import styles from './navbar.scss'


const Navbar = () => {
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
    </div>
  )
}

export const NavbarContainer = connect((state, ownProps) => ownProps)(Navbar)
