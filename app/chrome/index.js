import React from 'react'
import { connect } from 'react-redux'
import { NavbarContainer } from './navbar'
import { Lock } from 'auth'


const Chrome = ({ loggedInUser, children }) => {
  return (
    <div>
      <NavbarContainer loggedInUser={ loggedInUser }></NavbarContainer>
      { children }
      {
        loggedInUser
        ? null
        : <Lock></Lock>
      }
    </div>
  )
}


export const ChromeContainer = connect((state, ownProps) => {
  return { loggedInUser: state.auth.loggedInUser, children: ownProps.children }
})(Chrome)



