import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'
import store from './store'
import Home from './home'


const muiTheme = getMuiTheme({
  palette: {
    textColor: 'cyan500',
  },
  appBar: {
    height: 50,
  },
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Provider store={ store }>
      <Home></Home>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('react-root')
)
