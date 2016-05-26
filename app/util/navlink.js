import React from 'react'
import { Link } from 'react-router'
import styles from './navlink.scss'



export const NavLink = props => {
  return (
    <Link { ...props } style={ { textDecoration: 'none' } } activeClassName={ styles.activeLink }>
      { props.children }
    </Link>
  )
}
