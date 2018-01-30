import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import signOut from '../actions/user/signout'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/classes">
              <h1>Welcome to Classes</h1>
            </Link>
          </div>
          <div className="navbar-end">
            <div style={{ paddingRight: 0 }} className="navbar-item">
              <p className="control">
                { signedIn ?
                  <button className="button is-danger" onClick={this.signOut.bind(this)}>Sign out</button> :
                  <Link className="button is-primary" to="/">Sign in</Link>
                }
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  signedIn: (!!user.currentUser && !!user.currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)