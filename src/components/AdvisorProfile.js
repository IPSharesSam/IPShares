import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addAdvisorProfile, updateAdvisor } from '../actions/user/advisor/add'
import { fetchOwnProfile } from '../actions/user/advisor/fetch'
import { FormControlLabel, FormHelperText, FormControl } from 'material-ui/Form'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Switch from 'material-ui/Switch'
import validate from 'validate.js'

const classes = {
  formBio: {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    minWidth: '100%',
    margin: '15px 0px',
    padding: '5px'
  },
  heading: {
    backgroundColor: '#fbfbfb',
    border: '1px solid #b8b8b8',
    minWidth: '100%',
    margin: '25px 0px 50px'
  }
}

export class AdvisorProfile extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired
  }

  constructor(props) {
    super()

    const { streetName, streetNumber, city } = props

    this.state = {
      streetName,
      streetNumber,
      city
    }
  }

  componentWillMount() {
    this.props.fetchOwnProfile()
  }

  cancel() {
    this.props.push('/')
  }

  validateStreetName() {
    const streetName = this.state.streetName
    const validationMsg = validate.single(streetName, { presence: true })

    if (!!validationMsg) {
      this.setState({
        streetNameError: validationMsg
      })
      return false
    }

    this.setState({
      streetNameError: null
    })
    return true
  }

  validateStreetNumber() {
    const streetNumber = this.state.streetNumber
    const validationMsg = validate.single(streetNumber, { presence: true })

    if (!!validationMsg) {
      this.setState({
        streetNumberError: validationMsg
      })
      return false
    }

    this.setState({
      streetNumberError: null
    })
    return true
  }

  validatePostalCode() {
    const postalCode = this.state.postalCode
    const validationMsg = validate.single(postalCode, { presence: true })

    if (!!validationMsg) {
      this.setState({
        postalCodeError: validationMsg
      })
      return false
    }

    this.setState({
      postalCodeError: null
    })
    return true
  }

  validateCity() {
    const city = this.state.city
    const validationMsg = validate.single(city, { presence: true })

    if (!!validationMsg) {
      this.setState({
        cityError: validationMsg
      })
      return false
    }

    this.setState({
      cityError: null
    })
    return true
  }

  validateCountry() {
    const country = this.state.country
    const validationMsg = validate.single(country, { presence: true })

    if (!!validationMsg) {
      this.setState({
        countryError: validationMsg
      })
      return false
    }

    this.setState({
      countryError: null
    })
    return true
  }

  validatePhoneNumber() {
    const phoneNumber = this.state.phoneNumber
    const validationMsg = validate.single(phoneNumber, { presence: true })

    if (!!validationMsg) {
      this.setState({
        phoneNumberError: validationMsg
      })
      return false
    }

    this.setState({
      phoneNumberError: null
    })
    return true
  }

  validateAll() {
    return (
      this.validateStreetName() &&
      this.validateStreetNumber() &&
      this.validateCity() &&
      this.validatePostalCode() &&
      this.validateCountry() &&
      this.validatePhoneNumber()
    )
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  // updateAdvisorProfile() {
  //   if (this.validateAll()) {
  //     this.props.updateAdvisor(this.state)
  //   }
  //   return false
  // }

  localAddAdvisorProfile() {
    if (this.validateAll()) {
      this.props.addAdvisorProfile(this.state)
    }
    return false
  }

  localUpdateAdvisorProfile() {
    const { _id } = this.props.advisorProfile
    if (this.validateAll()) {
      this.props.updateAdvisor({ ...this.state, AdvisorProfileId: _id })
    }
    return false
  }

  render() {
    console.log(!!this.props.advisorProfile)
    const { streetName } = this.props.advisorProfile
    return (
      <div className="wrap">
        <Typography type="title" component="h2">
          Advisor profile - {streetName}
        </Typography>
        <form>
          <Grid container spacing={24}>
            <Grid item xs={8} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="streetName"
                  type="text"
                  label={streetName ? streetName : 'Streetname'}
                  onChange={this.handleChange('streetName')}
                />
                <FormHelperText id="streetName-error-text">
                  {this.state.streetNameError}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
              <FormControl fullWidth>
                <TextField
                  id="streetNumber"
                  type="text"
                  label="House number"
                  onChange={this.handleChange('streetNumber')}
                />
                <FormHelperText id="streetNumber-error-text">
                  {this.state.streetNumberError}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth>
                <TextField
                  id="city"
                  type="text"
                  label="City"
                  onChange={this.handleChange('city')}
                />
                <FormHelperText id="city-error-text">
                  {this.state.cityError}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <TextField
                  id="postalCode"
                  type="text"
                  label="Postal Code"
                  onChange={this.handleChange('postalCode')}
                />
                <FormHelperText id="postalCode-error-text">
                  {this.state.postalCodeError}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <TextField
                  id="country"
                  type="text"
                  label="Country"
                  fullWidth={true}
                  onChange={this.handleChange('country')}
                />
                <FormHelperText id="country-error-text">
                  {this.state.countryError}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <TextField
                  style={classes.form}
                  id="phoneNumber"
                  type="text"
                  label="Phone number"
                  onChange={this.handleChange('phoneNumber')}
                />
                <FormHelperText id="phoneNumber-error-text">
                  {this.state.phoneNumberError}
                </FormHelperText>
              </FormControl>
            </Grid>
            {/* <Grid item xs={6} md={5}>
              <FormControl fullWidth>
                <TextField
                  style={classes.form}
                  id="publicEmail"
                  type="text"
                  label="Email"
                  onChange={this.handleChange('email')}
                />
              </FormControl>
            </Grid> */}
          </Grid>

          <ExpansionPanel style={classes.heading}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Bio</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                style={classes.formBio}
                className="TextField"
                placeholder="Write something about yourself"
                id="bio"
                multiline={true}
                InputProps={{ disableUnderline: true }}
                onChange={this.handleChange('bio')}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </form>
        {!!this.props.advisorProfile ? (
          <Button
            onClick={this.localUpdateAdvisorProfile.bind(this)}
            raised
            color="primary"
          >
            Update profile
          </Button>
        ) : (
          <Button
            onClick={this.localAddAdvisorProfile.bind(this)}
            raised
            color="primary"
          >
            Create profile
          </Button>
        )}
        <Button onClick={this.cancel.bind(this)} color="primary">
          Cancel
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ advisorProfile }) => ({
  advisorProfile
})

export default connect(mapStateToProps, {
  push,
  addAdvisorProfile,
  updateAdvisor,
  fetchOwnProfile
})(AdvisorProfile)
