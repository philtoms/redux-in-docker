import React from 'react'


export const ExampleComponent = ({ headingText = 'Dummy Route', route }) => {
  return (
    <div>
      <h3>{ headingText }</h3>
      { route.content || 'Default Dummy Route Content' }
    </div>
  )
}
