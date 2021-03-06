import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import GridList from '../components/publicProfile/GridList'
import GridListClients from '../components/publicProfile/GridListClients'
import MapWithMarker from '../components/publicProfile/MapWithMarker'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import PublicAdvisor from 'material-ui-icons/Contacts'
import PublicClient from 'material-ui-icons/PersonPinCircle'
import Typography from 'material-ui/Typography'
import Calendar from '../components/publicProfile/Calendar'
import Grid from 'material-ui/Grid'
import StarRatingComponent from 'react-star-rating-component'
import Chip from 'material-ui/Chip'
import 'react-dates/lib/css/_datepicker.css'
import './PublicProfile.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchAdvisor from '../actions/user/advisor/fetch'
import { newRating, updateRating } from '../actions/user/advisor/rating'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import { loadError } from '../actions/user/loading'

class PublicAdvisorProfile extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      ratingDialogOpen: false,
      rating: 0,
      comment: ''
    }
  }

  componentWillMount() {
    const { fetchAdvisor } = this.props
    const { advisorId } = this.props.match.params
    fetchAdvisor(advisorId)
  }

  componentWillReceiveProps(nextProps) {
    const { ratings } = nextProps.advisorProfile
    const { user } = nextProps

    if (!user) return null

    const currentRating = ratings.filter(r => r.clientId.toString() === user._id.toString())[0]
    if (!currentRating) return null

    this.setState({
      rating: currentRating.rating,
      comment: currentRating.comment
    })

  }

  submitForm(event) {
    event.preventDefault()
    const appointment = {
      date: this.state.date,
      msg: this.state.msg
    }
    return appointment
  }

  submitStarRatingForm(event) {
    event.preventDefault()
    const advisorUser = this.props.advisorProfile.user
    const { ratings } = this.props.advisorProfile
    const { signedIn, user } = this.props
    const { rating, comment } = this.state

    if (!signedIn) {
      this.props.loadError("You have to login to rate an advisor")
      return null
    }
    if (advisorUser._id.toString() === user._id.toString()) {
      this.props.loadError("I know you're great, but let's leave this to others...")
      return null
    }
    if (rating === 0) {
      this.props.loadError("You need to give a rating of 1 to 5 stars")
      return null
    }
    if (comment === '') {
      this.props.loadError("You need to write a comment")
      return null
    }

    const newRating = {
      advisorId: advisorUser._id,
      clientId: user._id,
      comment: comment,
      rating: rating
    }

    const currentRating = ratings.filter(r => r.clientId.toString() === user._id.toString())[0]
    const isNewRating = !currentRating
    isNewRating
      ? this.props.newRating(newRating)
      : this.props.updateRating(newRating, currentRating._id)
    this.setState({ ratingDialogOpen: false })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  calculateRatingAverage(ratings) {
    return ratings.reduce((x, rating) => x + rating.rating, 0) / ratings.length
  }

  handleClose = () => {
    this.setState({ ratingDialogOpen: false })
  }

  handleOpen = () => {
    this.setState({ ratingDialogOpen: true })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue })
  }

  render() {
    const { user, picUrl, ratings, bio, tags, latlng, companyName } = this.props.advisorProfile
    if (!user) return null
    const ratingAverage = this.calculateRatingAverage(ratings)

    return (
      <div>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12} md={5}>
              <header className="Header-wrap" style={{ margin: 'auto' }}>
                <div className="picture">
                  <img style={{ width: '300px', height: '300px' }} className="AdvisorImage" src={picUrl} alt="Advisor" />
                </div>
                <div className="AdvisorLabels">
                  <Typography
                    type="headline"
                    component="h2"
                    style={{ color: '#ff1227', marginBottom: 12 }}
                    align="center"
                  >
                    {`${user.firstName} ${user.lastName} - ${companyName}`}
                  </Typography>
                  <div><Chip label={tags} /></div>
                  <Badge
                    style={{ margin: '18px' }}
                    className="Badge"
                    badgeContent={4}
                    color="primary"
                  >
                    <PublicAdvisor />
                  </Badge>Advisors
                  <Badge
                    style={{ margin: '18px' }}
                    className="Badge"
                    badgeContent={8}
                    color="primary"
                  >
                    <PublicClient />
                  </Badge>Clients
                  <div onClick={this.handleOpen.bind(this)}>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={ratingAverage}
                      editing={false}
                    />
                  </div>
                </div>
              </header>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Bio
              </Typography>
              <Typography variant="body1" component="p" align="center">
                {bio}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Partners
              </Typography>
              <GridList />

              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Clients
              </Typography>
              <GridListClients />

              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Get in contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form className="Contact-wrap">
                <div className="MsgField">
                  <TextField
                    className="TextField"
                    placeholder="send a message"
                    multiline={true}
                    InputProps={{ disableUnderline: true }}
                    onChange={this.handleChange('msg').bind(this)}
                  />
                  <Button
                    onClick={this.submitForm.bind(this)}
                    raised
                    color="default"
                    fullWidth={true}
                  >
                    submit
                  </Button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Calendar />
            </Grid>
            <Grid item xs={12}>
              <MapWithMarker
                latlng={latlng}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places"
                mapElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                loadingElement={<div style={{ height: `100%` }} />} />
            </Grid>
          </Grid>
        </Paper>

        <div>
          <Dialog
            fullScreen={false}
            open={this.state.ratingDialogOpen}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {'Share your thoughts with other clients'}
            </DialogTitle>
            <DialogContent>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />

              <form
                onSubmit={this.submitStarRatingForm.bind(this)}
                className="Contact-wrap"
              >
                <div>
                  <TextField
                    className="TextField"
                    placeholder="Write a comment"
                    multiline={true}
                    InputProps={{ disableUnderline: true }}
                    onChange={this.handleChange('comment')}
                    rowsMax={12}
                    value={this.state.comment}
                  />
                </div>
              </form>
              <DialogContentText />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                back
              </Button>
              <Button
                onClick={this.submitStarRatingForm.bind(this)}
                raised
                color="primary"
                autoFocus
              >
                submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user, advisorProfile }) => {
  const signedIn = !!user && !!user._id

  return {
    signedIn,
    advisorProfile,
    user
  }
}

export default connect(mapStateToProps, {
  push,
  fetchAdvisor,
  newRating,
  updateRating,
  loadError
})(PublicAdvisorProfile)
