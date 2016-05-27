import React from 'react'
import { connect } from 'react-redux'
import { NavbarContainer } from './navbar'
import { Lock } from 'auth'
import styles from './chrome.scss'



const Chrome = ({ loggedInUser, children }) => {
  let innerHtml = loggedInUser ? children : <Lock></Lock>
  return (
    <div>
      <NavbarContainer loggedInUser={ loggedInUser }></NavbarContainer>
      <div className={ styles.chrome }>
        { innerHtml }
      </div>
    </div>
  )
}


export const ChromeContainer = connect(({ auth }, { children }) => {
  return { loggedInUser: auth.loggedInUser, children }
})(Chrome)



