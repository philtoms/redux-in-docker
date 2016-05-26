import React from 'react'
import { connect } from 'react-redux'
import { NavbarContainer } from './navbar'
import { Lock } from 'auth'
import styles from './chrome.scss'



const Chrome = ({ loggedInUser, children }) => {
  return (
    <div>
      <NavbarContainer loggedInUser={ loggedInUser }></NavbarContainer>
      {
        loggedInUser
          ? ''
          : <Lock></Lock>
      }
      <div className={ styles.chrome }>
        { children }
      </div>
    </div>
  )
}


export const ChromeContainer = connect((state, ownProps) => {
  return { loggedInUser: state.auth.loggedInUser, children: ownProps.children }
})(Chrome)



