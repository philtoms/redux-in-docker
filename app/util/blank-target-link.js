import React from 'react'


export const BlankTargetLink = ({ to, children }) => {
  return <a href={ to } target='_blank'>{ children }</a>
}
