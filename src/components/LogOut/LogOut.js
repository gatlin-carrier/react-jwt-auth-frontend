import React, { Component } from 'react'

import './LogOut.css'

class LogOut extends Component {
  render() {
    return (
      <div>
        <h3>Log Out</h3>

        <form>
          <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
