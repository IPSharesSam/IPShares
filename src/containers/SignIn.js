import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import signIn from '../actions/user/sign-in'
import './SignIn.css'

export class SignIn extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signedIn: PropTypes.bool,
  }

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    }
    this.props.signIn(user)
  }

  signUp() {
    this.props.push('/sign-up')
  }

  render() {
    return (
      <GridList>
        <GridTile className="landing-text" rows={4}>
          <h1>IP Shares, a decentral intellectual property economy</h1>
          <p>Uniting creators, advisors, all IP facets and the market using it's own cryptotoken, the IP Share. From licensing your patent to auctioning your painting...</p> 
          <p> Welcome to the next big thing.</p>
        </GridTile>
        <GridTile rows={4}>
          <Paper className="signin-paper">
            <h1>Sign in</h1>
            <form onSubmit={this.submitForm.bind(this)}>
              <TextField ref="email" type="email" hintText="Email address" fullWidth={true} />
              <TextField ref="password" type="password" hintText="Password" fullWidth={true} />
            </form>
            <RaisedButton
              onClick={this.submitForm.bind(this)}
              label="Sign in"
              primary={true} />
            <FlatButton
              onClick={this.signUp.bind(this)}
              label="Sign up" />
          </Paper>
        </GridTile>
      </GridList>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { signIn, replace, push })(SignIn)
