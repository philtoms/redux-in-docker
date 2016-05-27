import React from 'react'
import { Link } from 'react-router'


export const NavLink = props => {
  console.log('rendering')
  return (
    <Link { ...props } style={ { textDecoration: 'none' } } activeStyle={ { fontWeight: 'bolder' } } />
  )
}
