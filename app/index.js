import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'
import store from './store'
import { ChromeContainer } from './chrome'
import { Home } from 'home'
import { CounterContainer } from 'counter'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()



const muiTheme = getMuiTheme({
  palette: {
    textColor: 'cyan500',
  },
})


ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <Router history={ syncHistoryWithStore(browserHistory, store) }>
        <Route path='/' component={ ChromeContainer }>
          <IndexRoute component={ Home } />
          <Route path='/example' component={ CounterContainer }></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('react-root')
)
