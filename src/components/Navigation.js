import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import signOut from '../actions/user/signout'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1,
    display: 'flex'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    marginLeft: 8
  }
}

export class Navigation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signedIn: PropTypes.bool.isRequired
  }

  signOut = event => {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { classes, user } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#ffffff' }}>
          <Toolbar style={{ minHeight: 90 }}>
            <div className={classes.flex}>
              <Typography
                type="display1"
                color="secondary"
                component={Link}
                to="/"
                style={{ display: 'inline-flex' }}
              >
                IP Shares
              </Typography>
              <Button
                className={classes.button}
                color="inherit"
                component={Link}
                to="/search"
              >
                Advisors &amp; creators
              </Button>
            </div>
            {this.props.signedIn ? (
              <div>
                <Button
                  className={classes.button}
                  raised
                  color="secondary"
                  component={Link}
                  to="/account"
                >
                  {user.currentUser.firstName + ' ' + user.currentUser.lastName}
                </Button>
                <Button
                  className={classes.button}
                  raised
                  color="inherit"
                  onClick={this.signOut}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  className={classes.button}
                  raised
                  color="secondary"
                  component={Link}
                  to="/sign-in"
                >
                  Sign in
                </Button>
                <Button
                  className={classes.button}
                  raised
                  color="inherit"
                  component={Link}
                  to="/sign-up"
                >
                  Sign up
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  signedIn: !!user.currentUser && !!user.currentUser._id,
  user
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { signOut })
)(Navigation)
