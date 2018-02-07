import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
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
import Dropzone from 'react-dropzone'
import request from 'superagent'
import Search from './GoogleMapsSearch'
import { fetchOwnProfile } from '../../actions/user/advisor/fetch'
import { updateAdvisor } from '../../actions/user/advisor/add'

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
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      phoneNumber: '',
      email: '',
      bio: '',
      address: '',
      place_id: ''
    }
  }
  static propTypes = {
    push: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchOwnProfile()
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    const {
      picUrl,
      phoneNumber,
      bio,
      address
    } = nextProps.advisorProfile
    this.setState({
      phoneNumber,
      bio,
      address,
      picUrl: !picUrl ? '' : picUrl
    })
  }

  cancel() {
    this.props.push('/')
  }

  handleChange(e) {
    var change = {}
    change[e.target.id] = e.target.value
    this.setState(change)
  }

  submitForm(event) {
    event.preventDefault()
    const { _id } = this.props.advisorProfile
    this.props.updateAdvisor({ ...this.state, AdvisorProfileId: _id })
    return false
  }

  handleImageUpload(file) {
    let upload = request
      .post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      this.setState({
        picUrl:
          'https://res.cloudinary.com/elexilon/image/upload/h_600,w_600,c_fill,g_face/' +
          response.body.public_id
      })
    })
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  childValueToState(x, y) {
    this.setState({
      address: x,
      place_id: y
    })
  }
  render() {
    const {
      picUrl,
      phoneNumber,
      bio,
      address
    } = this.state


    const { user } = this.props.advisorProfile
    if (!user) return null

    return (
      <div>
        <Typography type="title" component="h2">
          Advisor profile
        </Typography>
        <form onSubmit={this.submitForm.bind(this)}>
          <Dropzone
            style={{ float: 'left', width: 300, height: 300 }}
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}
          >
            {picUrl === '' ? (
              <p>Drop an image or click to select a file to upload.</p>
            ) : (
                <div>
                  <img src={picUrl} alt="" />
                </div>
              )}
          </Dropzone>

          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Search hank={address} pushParent={this.childValueToState.bind(this)} />
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <TextField
                  style={classes.form}
                  id="phoneNumber"
                  type="phoneNumber"
                  label="Phone"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormHelperText id="phoneNumber-error-text">
                  {this.state.phoneNumberError}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={5}>
              <FormControl fullWidth>
                <TextField
                  style={classes.form}
                  id="publicEmail"
                  type="text"
                  label="Email"
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
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
                value={bio}
                onChange={this.handleChange}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <FormControlLabel
            style={{ float: 'right' }}
            control={
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                className="profile-toggle"
                style={classes.toggle}
              />
            }
            label="Public profile"
          />
          <Button type="submit" raised color="primary">Update</Button>
          <Button onClick={this.cancel.bind(this)} color="primary">Cancel</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ advisorProfile }) => ({
  advisorProfile
})

export default connect(mapStateToProps, {
  push,
  fetchOwnProfile,
  updateAdvisor
})(AdvisorProfile)
