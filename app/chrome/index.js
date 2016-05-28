import React from 'react'
import { NavbarContainer } from './navbar'
import styles from './chrome.scss'


export const Chrome = ({ children }) => {
  return (
    <div>
      <NavbarContainer />
      <div className={ styles.chrome }>
        { children }
      </div>
    </div>
  )
}
