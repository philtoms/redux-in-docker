import React, { Component } from 'react'
import { logIn } from 'auth'
import { Loader } from 'util'
import store from 'store'


export class Lock extends Component {
  componentDidMount() {
    store.dispatch(logIn())
  }

  render() {
    return (<Loader text={ 'Signing In' }></Loader>)
  }
}
