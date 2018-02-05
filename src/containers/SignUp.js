import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import validate from "validate.js"
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Radio, { RadioGroup } from 'material-ui/Radio'

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

  state = { activeStep: 0 }

  submitForm(event) {
    event.preventDefault()

    const { companyName, firstName, lastName, email, password, option } = this.state

    if (this.validateAll()) {
      const user = {
        companyName: companyName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        type: option,
      }
      this.props.signUp(user)
    }
    return false
  }

  cancel() {
    this.props.push('/')
  }

  validateAll() {
    const { firstName, lastName, email, password, passwordConfirmation } = this.state
    return this.validateFirstName(firstName) &&
      this.validateLastName(lastName) &&
      this.validateEmail(email) &&
      this.validatePassword(password) &&
      this.validatePasswordConfirmation(passwordConfirmation)
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
    const validationMsg = validate.single(email, {presence: true, email: true})
    if (!!validationMsg && email.length > 0) {
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
    const validationMsg = validate.single(firstName, {presence: true,
      length: {minimum: 2,
              message: "first names can't be too short."
      }
    })

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
    const validationMsg = validate.single(lastName, {presence: true,
      length: {minimum: 2,
              message: "first names can't be too short."
      }
    })

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
    const { password } = this.state

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

  getSteps() {
    return ['Creator/Advisor', 'SignUp'];
  }

  getStepContent(stepIndex) {
    const { activeStep } = this.state

    switch (stepIndex) {
      case 0:
        return (<RadioGroup
            aria-label="Creator/Advisor"
            name="Creator/Advisor"
            value={this.state.option}
            onChange={this.handleChange("option")}
          >
            <FormControlLabel value="Creator" control={<Radio />} label="Creator" />
            <FormControlLabel value="Advisor" control={<Radio />} label="Advisor" />
          </RadioGroup>)
      case 1:
      if(!this.state.option) {
        this.setState({
          activeStep: activeStep - 1,
        })
      }
        return (<form onSubmit={this.submitForm.bind(this)}>
          <FormControl fullWidth className="formControl">
            <TextField id="CompanyName"
              error={!!this.state.CompanyNameError}
              type="text"
              placeholder="Company Name"
              onChange={this.handleChange("CompanyName")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="lastName-error-text">{this.state.CompanyNameError}</FormHelperText>
          </FormControl>

          <FormControl className="formControl">
            <TextField id="firstName"
              error={!!this.state.firstNameError}
              type="text"
              placeholder="First Name"
              onChange={this.handleChange("firstName")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="firstName-error-text">{this.state.firstNameError}</FormHelperText>
          </FormControl>

          <FormControl className="formControl">
            <TextField id="lastName"
              error={!!this.state.lastNameError}
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange("lastName")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="lastName-error-text">{this.state.lastNameError}</FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField id="email"
              error={!!this.state.emailError}
              type="email"
              placeholder="Email address"
              onChange={this.handleChange("email")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="email-error-text">{this.state.emailError}</FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField id="password"
              error={!!this.state.passwordError}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={this.handleChange("password")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="password-error-text">{this.state.passwordError}</FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField id="passwordConfirmation"
              error={!!this.state.passwordConfirmationError}
              type="password"
              placeholder="Password Confirmation"
              autoComplete="current-password"
              onKeyUp={this.handleChange("passwordConfirmation")}
              onChange={this.handleChange("passwordConfirmation")} />
            <FormHelperText style={{ marginBottom: 6, marginTop: 6 }}
              id="passwordConfirmation-error-text">{this.state.passwordConfirmationError}</FormHelperText>
          </FormControl>

        </form>
        )

      default:
        return 'Uknown stepIndex'
    }
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    })
  }

  handleBack = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep - 1,
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }


  render() {

    const steps = this.getSteps()
    const { activeStep } = this.state

    return (
      <Paper style={ dialogStyle }>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {(
            <div>
              {this.getStepContent(activeStep)}
              <div>
                <Button
                  onClick={activeStep === 0 ?
                  this.cancel.bind(this) : this.handleBack}
                >
                  {activeStep === 0 ? 'Cancel' : 'Back'}
                </Button>
                <Button raised color="secondary"
                  onClick={ activeStep === steps.length - 1 ?
                  this.submitForm.bind(this) : this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>

      </Paper>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
