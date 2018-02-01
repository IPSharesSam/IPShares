import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import { FormControl, FormHelperText } from 'material-ui/Form'
import validate from "validate.js"

const dialogStyle = {
  width: '600px',
  margin: '50px auto',
  padding: '2rem',
}

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
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })

    switch(name) {
    case "email":
        this.validateEmail(event.target.value)
        break
    case "firstName":
        this.validateFirstName(event.target.value)
        break
    case "lastName":
        this.validateLastName(event.target.value)
        break
    case "password":
        this.validatePassword(event.target.value)
        break
    case "passwordConfirmation":
        this.validatePasswordConfirmation(event.target.value)
        break
    default:
        return false
    }

  }

  validateEmail(email) {
    // const email = this.state.email
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

  validateFirstName(firstName) {
    // const firstName = this.state.firstName
    const validationMsg = validate.single(firstName, {presence: true})

    if (!!validationMsg) {
      this.setState({
        firstNameError: validationMsg
      })
      return false
    }

    this.setState({
      firstNameError: null
    })
    return true
  }

  validateLastName(lastName) {
    // const lastName = this.state.lastName
    const validationMsg = validate.single(lastName, {presence: true})

    if (!!validationMsg) {
      this.setState({
        lastNameError: validationMsg
      })
      return false
    }

    this.setState({
      lastNameError: null
    })
    return true
  }

  validatePassword(password) {
    // const password = this.state.password
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

  validatePasswordConfirmation(passwordConfirmation) {
    const password = this.state.password
    // const passwordConfirmation = this.state.passwordConfirmation

    // const validationMsg = validate.single(
    //   passwordConfirmation,
    //   { presence: true, 
    //     length: { minimum: 6, message: "must be at least 6 characters" }
    //   }
    // )

    // if (!!validationMsg) {
    //   this.setState({
    //     passwordConfirmationError: validationMsg
    //   })
    //   return false
    // }

    if ((passwordConfirmation !== password) && password.length > 5) {
      this.setState({
        passwordConfirmationError: "password confirmation is different"
      })
      return false
    }

    this.setState({
      passwordConfirmationError: null
    })
    return true
  }


  render() {
    return (
      <Paper style={ dialogStyle }>
        <h1>Sign up</h1>

        <form onSubmit={this.submitForm.bind(this)}>

          <FormControl className="formControl">
            <TextField id="firstName" type="text" placeholder="First Name"
              onChange={this.handleChange("firstName")}
            />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }} id="firstName-error-text">{this.state.firstNameError}</FormHelperText>
          </FormControl>

          <FormControl className="formControl">
            <TextField id="lastName" type="text" placeholder="Last Name"
              onChange={this.handleChange("lastName")}
            />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }} id="firstName-error-text">{this.state.firstNameError}</FormHelperText>
          </FormControl>

           <FormControl fullWidth className="formControl">
             <TextField id="email" type="email" placeholder="Email address"
               onChange={this.handleChange("email")}
             />
             <FormHelperText style={{ marginBottom: 6, marginTop: 6 }} id="email-error-text">{this.state.emailError}</FormHelperText>
           </FormControl>

           <FormControl fullWidth className="formControl">
             <TextField id="password" type="password" placeholder="Password" autoComplete="current-password"
               onChange={this.handleChange("password")}
             />
             <FormHelperText style={{ marginBottom: 6, marginTop: 6 }} id="password-error-text">{this.state.passwordError}</FormHelperText>
           </FormControl>

           <FormControl fullWidth className="formControl">
             <TextField id="passwordConfirmation" type="password" placeholder="Password Confirmation"
               autoComplete="current-password"
               onKeyUp={this.handleChange("passwordConfirmation")}
               onChange={this.handleChange("passwordConfirmation")}
             />
             <FormHelperText style={{ marginBottom: 6, marginTop: 6 }} id="passwordConfirmation-error-text">{this.state.passwordConfirmationError}</FormHelperText>
           </FormControl>

        </form>
        <Button
          onClick={ this.submitForm.bind(this) }
          raised color="primary">
          Sign in
        </Button>
        <Button onClick={this.cancel.bind(this)}> Cancel </Button>
      </Paper>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
