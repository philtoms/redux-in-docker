import React from 'react'
import { Link } from 'react-router'


export const NavLink = props => {
  return (
    <Link { ...props } style={ { textDecoration: 'none' } } activeStyle={ { fontWeight: 'bolder' } } />
  )
}
