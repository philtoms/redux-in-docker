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


export const ChromeContainer = connect((state, ownProps) => {
  return { loggedInUser: state.auth.loggedInUser, children: ownProps.children }
})(Chrome)



