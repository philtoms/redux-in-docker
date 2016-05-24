import React, { PropTypes } from 'react'
import loadingStyles from './loader.scss'

export const Loader = ({ text = 'Loading' }) => {
  return (
    <div className={ loadingStyles.loading }>
      <p>{ text }</p>
      <div className={ loadingStyles.loadingInner }>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>
  )
}

Loader.propTypes = {
  text: PropTypes.string,
}
