import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import './SignUp.css'

export class SignUp extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = { }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        firstName: this.refs.firstName.getValue(),
        lastName: this.refs.lastName.getValue(),
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      }
      this.props.signUp(user)
    }
    return false
  }

  cancel() {
    this.props.push('/')
  }

  validateAll() {
    return this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateFirstName() {
    const { firstName } = this.refs

    if (firstName.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }
  validateLastName() {
    const { lastName } = this.refs

    if (lastName.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }
  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
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

    if (password.getValue().length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.getValue().match(/[a-zA-Z]+/) && password.getValue().match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }
  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.value === passwordConfirmation.value) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }
  render() {
    return (
      <Paper className="signup-paper">
        <h1>Sign up</h1>

        <form onSubmit={this.submitForm.bind(this)}>

          <TextField className="left-inline" ref="firstName" type="text" hintText="First Name"
            onChange={this.validateFirstName.bind(this)}
            errorText={this.state.nameError}
            />

          <TextField className="right-inline" ref="lastName" type="text" hintText="Last Name"
            onChange={this.validateLastName.bind(this)}
            errorText={this.state.nameError}
             />

          <TextField ref="email" type="email" hintText="Email address"
            onChange={this.validateEmail.bind(this)}
            errorText={this.state.emailError}
            fullWidth={true}
            />

          <TextField ref="password" type="password" hintText="Password"
            onChange={this.validatePassword.bind(this)}
            errorText={this.state.passwordError}
            fullWidth={true}
             />

          <TextField ref="passwordConfirmation" type="password" hintText="Repeat Password"
            onKeyUp={this.validatePasswordConfirmation.bind(this)}
            onChange={this.validatePasswordConfirmation.bind(this)}
            errorText={this.state.passwordConfirmationError}
            fullWidth={true}
             />
        </form>
        <Button
          onClick={this.submitForm.bind(this)}
          label="Sign up"
          primary={true} />
        <Button
          onClick={this.cancel.bind(this)}
          label="Cancel" />
      </Paper>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
