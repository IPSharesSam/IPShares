import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signIn from '../actions/user/sign-in'
import { FormControl, FormHelperText } from 'material-ui/Form'
import validate from "validate.js"

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

    if(!this.validateAll()) return null
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.signIn(user)
  }

  validateAll() {
    return this.validateEmail(this) &&
      this.validatePassword(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })

    switch(name) {
    case "email":
        this.validateEmail()
        break
    case "password":
        this.validatePassword()
        break
    default:
        return false
    }
  }

  validateEmail() {
    const email = this.state.email

    const validationMsg = validate.single(email, {presence: true, email: true})

    if (!!validationMsg) {
      this.setState({
        emailError: validationMsg
      })
      return false
    }

    this.setState({
      emailError: null
    })
    return true

  }

  validatePassword() {
    const password = this.state.password
    const validationMsg = validate.single(password, {presence: true,
      length: {minimum: 6,
              message: "must be at least 6 characters"
      }
    })

    if (!!validationMsg) {
      this.setState({
        passwordError: validationMsg
      })
      return false
    }

    this.setState({
      passwordError: null
    })
    return true
  }


  render() {
    return (
      <Paper style={ dialogStyle }>

        <form onSubmit={this.submitForm.bind(this)}>
          <FormControl fullWidth className="formControl">
            <TextField id="email" type="email" placeholder="Email address"
              onChange={this.handleChange("email")}
              fullWidth={true}
            />
            <FormHelperText id="email-error-text">{this.state.emailError}</FormHelperText>
          </FormControl>

          <FormControl fullWidth className="formControl">
            <TextField id="password" type="password" placeholder="Password" autoComplete="current-password"
              onChange={this.handleChange("password")}
              fullWidth={true}
            />
            <FormHelperText id="password-error-text">{this.state.passwordError}</FormHelperText>
          </FormControl>
        </form>

        <Button
          onClick={ this.submitForm.bind(this) }
          raised color="primary">
          {"Sign in"}
        </Button>

      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { signIn, replace, push })(SignIn)
