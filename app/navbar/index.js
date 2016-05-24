import React, { PropTypes, Component } from 'react'
import { logOut } from 'auth'
import { connect } from 'react-redux'


class VisualNavbar extends Component {
  static get propTypes() {
    return {
      onLogOutClick: PropTypes.func,
      loggedInUser: PropTypes.string,
    }
  }

  render() {
    const { loggedInUser, onLogOutClick } = this.props
    return (
      <div>
        Logged In { loggedInUser }
        { ' ' }
        <a href='' onClick={ event => {
          event.preventDefault()
          onLogOutClick()
        } }>
          Log Out
        </a>
      </div>
    )
  }
}

export const Navbar = connect(
  state => {
    return { loggedInUser: state.loggedInUser }
  },
  dispatch => {
    return {
      onLogOutClick() {
        return dispatch(logOut())
      },
    }
  },
)(VisualNavbar)
