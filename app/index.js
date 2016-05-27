import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

import { ChromeContainer } from './chrome'
import { Home } from 'home'
import { CounterContainer } from 'counter'
import { ExampleComponent } from 'util'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()


// http://www.material-ui.com/#/customization/themes
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#455A64',
  },
})


ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <Router history={ syncHistoryWithStore(browserHistory, store) }>
        <Route path='/' component={ ChromeContainer }>
          <IndexRoute component={ Home } />
          <Route path='example' component={ CounterContainer }></Route>
          <Route path='dummy-route-1' component={ ExampleComponent } content='First Dummy Route'></Route>
          <Route path='dummy-route-2' component={ ExampleComponent }></Route>
          <Redirect from="*" to='/' />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('react-root')
)
