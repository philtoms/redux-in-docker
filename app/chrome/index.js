import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from './navbar'
import { Lock, getLoggedInUser } from 'auth'
import styles from './chrome.scss'

function Chrome({ loggedInUser, children }) {
  return <div>
    <Navbar loggedInUser={ loggedInUser } />
    <div className={ styles.chrome }>
      { loggedInUser ? children : <Lock /> }
    </div>
  </div>
}

Chrome.propTypes = {
  loggedInUser: PropTypes.object,
  children: PropTypes.node,
}

export default connect(
  (state, { children }) => ({ loggedInUser: getLoggedInUser(state), children }),
)(Chrome)
