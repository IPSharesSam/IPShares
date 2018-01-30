import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import './SignUp.css'
import Switch from 'material-ui/Switch'

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
}

export class SignUp extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = {
    checked: true,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const profile = {
        user: "",
        streetName: this.refs.streetName.getValue(),
        streetNumber: this.refs.streetNumber.getValue(),
        postalCode: this.refs.postalCode.getValue(),
        city: this.refs.city.getValue(),
        country: this.refs.country.getValue(),
        phoneNumber: this.refs.phoneNumber.getValue(),
        publicAdvisor: this.state.checked,
        tags: [],
        clients: [],
        partners: [],
      }
      console.log(profile);
      //this.props.signUp(user)
    }
    return false
  }

  cancel() {
    this.props.push('/')
  }

  validateAll() {
    return true
  }

  render() {
    return (
      <Paper className="signup-paper">
        <h1>Advisor Profile</h1>

        <form onSubmit={this.submitForm.bind(this)}>

          <TextField className="left-inline" ref="streetName" type="text" hintText="Street" />

          <TextField className="right-inline" ref="streetNumber" type="text" hintText="Number" />

          <TextField className="left-inline" ref="postalCode" type="text" hintText="Postal Code" />

          <TextField className="right-inline" ref="city" type="text" hintText="City"/>

          <TextField ref="country" type="text" hintText="Country" fullWidth={true}/>

          <TextField ref="phoneNumber" type="text" hintText="Phone Number" fullWidth={true}/>

          <Switch
          checked={this.state.checked}
          onChange={this.updateCheck.bind(this)}
          className = "profile-toggle"
          labelPosition="left"
          label = "Public profile:"
          style={styles.toggle}
          />

        </form>
        <Button
          onClick={this.submitForm.bind(this)}
          label="Update"
          raised color="primary"
          />
        <Button
          onClick={this.cancel.bind(this)}
          color="primary"
          label="Cancel" />
      </Paper>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
