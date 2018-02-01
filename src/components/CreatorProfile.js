import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { FormControlLabel } from 'material-ui/Form';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import Switch from 'material-ui/Switch'
import './AdvisorProfile.css'

const styles = {
  form: {
    minWidth: "50%",
    margin: "15px 0px"
  },
  formBio: {
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    minWidth: "100%",
    margin: "15px 0px",
    padding: "5px"
  },
  heading: {
    backgroundColor: "#fbfbfb",
    border: "1px solid #b8b8b8",
    minWidth: "100%",
    margin: "15px 0px",
  },
}

export class CreatorProfile extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
  }

  state = { }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const profile = {
        streetName: this.state.streetName,
        streetNumber: this.state.streetNumber,
        postalCode: this.state.postalCode,
        city: this.state.city,
        country: this.state.country,
        phoneNumber: this.state.phoneNumber,
        publicAdvisor: this.state.publicAdvisor,
        bio: this.state.bio,
        tags: [],
        clients: [],
        partners: [],
      }
      this.props.push('/')
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

      <div className="wrap">
        <Typography type="title" component="h2">Creator profile</Typography>

        <form onSubmit={this.submitForm.bind(this)}>

          <TextField style={styles.form} className="left-inline" id="streetName" type="text" label="Street" onChange={this.handleChange("streetName")}/>

          <TextField style={styles.form} className="right-inline" id="streetNumber" type="text" label="Number" onChange={this.handleChange("streetNumber")}/>

          <TextField style={styles.form} className="left-inline" id="postalCode" type="text" label="Postal Code" onChange={this.handleChange("postalCode")} />

          <TextField style={styles.form} className="right-inline" id="city" type="text" label="City" onChange={this.handleChange("city")}/>

          <TextField style={styles.form} id="country" type="text" label="Country" fullWidth={true} onChange={this.handleChange("country")}/>

          <TextField style={styles.form} id="phoneNumber" type="text" label="Phone Number" onChange={this.handleChange("phoneNumber")} />

          <TextField style={styles.form} id="publicEmail" type="text" label="Public email" onChange={this.handleChange("email")} />


            <ExpansionPanel style={styles.heading}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Bio</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TextField style={styles.formBio}
                  className="TextField"
                  placeholder="Write something about yourself"
                  id="bio"
                  multiline={true}
                  InputProps={{ disableUnderline: true  }}
                  onChange={this.handleChange("bio")}
                  />
              </ExpansionPanelDetails>
            </ExpansionPanel>



          <FormControlLabel style={{float:"right"}}
            control={
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange("publicAdvisor")}
                className = "profile-toggle"
                style={styles.toggle}
              />
            }
            label="Public profile"
          />

        </form>
        <Button
          onClick={this.submitForm.bind(this)}
          raised color="primary" >
          Update
        </Button>
        <Button
          onClick={this.cancel.bind(this)}
          color="primary">
          Cancel
        </Button>
      </div>

    )
  }
}

export default connect(null, { push })(CreatorProfile)
