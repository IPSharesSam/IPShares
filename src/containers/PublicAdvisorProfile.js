import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import GridList from '../components/publicProfile/GridList'
import GridListClients from '../components/publicProfile/GridListClients'
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
    const { user, ratings } = this.props.advisorProfile
    const { signedIn, currentUser } = this.props
    const { rating, comment } = this.state

    if (!signedIn) return false //TODO: SEND ERROR signedIn
    if (rating === 0) return false //TODO: SEND ERROR Rating please
    if (comment === '') return false //TODO: SEND ERROR Rating message

    const newRating = {
      advisorId: user._id,
      clientId: currentUser._id,
      comment: comment,
      rating: rating
    }

    const currentRating = ratings.filter(r => r.clientId === currentUser._id)[0]
    const isNewRating = !currentRating
    console.log(currentRating, isNewRating)
    isNewRating
      ? this.props.newRating(newRating)
      : this.props.updateRating(newRating)
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
    const { user, picUrl, ratings } = this.props.advisorProfile
    if (!user) return null
    const ratingAverage = this.calculateRatingAverage(ratings)

    return (
      <div>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12} md={5}>
              <header className="Header-wrap">
                <div className="picture">
                  <img className="AdvisorImage" src={picUrl} alt="Advisor" />
                </div>
                <div className="AdvisorLabels">
                  <Typography
                    type="headline"
                    component="h2"
                    style={{ color: '#ff1227', marginBottom: 12 }}
                    align="center"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>
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
              <p>
                Federico Lega, Ph.D, is a Professor of Healthcare Management and
                Policy at Bocconi University. He received his BA in Economics
                and Business Administration from Bocconi University, Milan. From
                the same institution, he received his Ph.D. degree in Business
                Administration in June 2000 after a period spent as a Visiting
                Fellow at the Wagner School of Public Management, New York
                University. Since 2006 he has been the Head of Executive
                Education for the Healthcare sector at SDA Bocconi School of
                Management (SDA). From 2002 to 2008, he was Director of the
                Master in Healthcare Management (MIMS - Italian class).{' '}
              </p>
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
                <div className="TextField">
                  <TextField
                    className="TextField"
                    placeholder="Write a comment"
                    multiline={true}
                    InputProps={{ disableUnderline: true }}
                    onChange={this.handleChange('comment')}
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
  const currentUser = user.currentUser
  const signedIn = !!currentUser && !!currentUser._id

  return {
    signedIn,
    advisorProfile,
    currentUser
  }
}

export default connect(mapStateToProps, {
  push,
  fetchAdvisor,
  newRating,
  updateRating
})(PublicAdvisorProfile)
