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
    width: '100%',
  },
  flex: {
    flex: 1,
    display: 'flex'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginLeft: 8,
  },
};

export class Navigation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signedIn: PropTypes.bool.isRequired
  }

  signOut = (event) => {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn, classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.flex}>
              <Typography type="headline" color="secondary" style={{ display: 'inline-flex' }}>
                IP Shares
              </Typography>
              <Button className={classes.button} color="inherit" component={Link} to="/">Home</Button>
              <Button className={classes.button} color="inherit" component={Link} to="/search">Search</Button>
              <Button className={classes.button} color="inherit" component={Link} to="/profiles">Profiles</Button>
              { this.props.signedIn ?
              <Button className={classes.button} color="inherit" component={Link} to="/account/advisor">Account</Button> :
                <div></div>
              }
            </div>
            { this.props.signedIn ?
              <Button raised color="inherit" onClick={this.signOut} >Sign out</Button> :
                <div>
                  <Button className={classes.button} raised color="secondary" component={Link} to="/sign-in" >Sign in</Button>
                  <Button className={classes.button} raised color="inherit" component={Link} to="/sign-up" >Sign up</Button>
                </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  signedIn: (!!user.currentUser && !!user.currentUser._id)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { signOut })
)(Navigation)
