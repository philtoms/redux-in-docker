import React from 'react'
import { BlankTargetLink } from 'util'



export const Home = () => {
  return (
    <div>
      <h2>Welcome to the React.js Starter App</h2>
      <p>Libraries used:</p>
      <p>
        <ul>
          <li><BlankTargetLink to='https://github.com/reactjs/react-router/'>React Router (Redux)</BlankTargetLink></li>
          <li><BlankTargetLink to='https://github.com/reactjs/redux/'>Redux</BlankTargetLink></li>
          <li><BlankTargetLink to='https://github.com/gaearon/redux-thunk'>Redux Thunk</BlankTargetLink></li>
          <li><BlankTargetLink to='https://github.com/acdlite/redux-actions'>Redux Actions</BlankTargetLink></li>
          <li><BlankTargetLink to='http://www.material-ui.com/'>Material UI</BlankTargetLink></li>
        </ul>
      </p>
      <p>Other libraries included but not used:</p>
      <p>
        <ul>
          <li><BlankTargetLink to='http://lodash.com/'>lodash</BlankTargetLink></li>
          <li><BlankTargetLink to='https://github.com/paularmstrong/normalizr'>normalizr</BlankTargetLink></li>
          <li><BlankTargetLink to='https://github.com/matthew-andrews/isomorphic-fetch'>fetch</BlankTargetLink></li>
        </ul>
      </p>
      <p>Hot-reloading is enabled; edit code in your IDE and watch the app update in real-time</p>
    </div>
  )
}
