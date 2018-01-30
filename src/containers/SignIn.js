import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signIn from '../actions/user/sign-in'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

export class SignIn extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signedIn: PropTypes.bool,
  }

  state = {}

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

  validateEmail = name => event => {
    const email = event.target.value
    this.setState({
      [name]: event.target.value,
    })

    console.log(email)

    if (email.match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false

  }

  validatePassword() {
    const { password } = this.refs

    if (password.getValue().length === 0) {
      this.setState({
        passwordError: 'Please insert your Password'
      })
      return false
    }
    return true
  }


  render() {
    return (
      <Paper style={ dialogStyle }>

        <form onSubmit={this.submitForm.bind(this)}>
          <TextField id="email" type="email" placeholder="Email address"
            onChange={this.validateEmail("email")}
            errorText={this.state.emailError}
            fullWidth={true}
          />

          <TextField ref="password" type="password" placeholder="Password" autoComplete="current-password"
            onChange={this.validatePassword.bind(this)}
            errorText={this.state.passwordError}
            fullWidth={true}
          />
        </form>

        <Button
          onClick={ this.submitForm.bind(this) }
          raised color="primary">
          Sign in
        </Button>

      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { signIn, replace, push })(SignIn)
