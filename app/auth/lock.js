import React, { Component } from 'react'
import { logInThunk } from 'auth'
import { Loader } from 'util'
import store from 'store'


export class Lock extends Component {
  componentDidMount() {
    store.dispatch(logInThunk())
  }

  render() {
    return (<Loader text={ 'Signing In' }></Loader>)
  }
}
