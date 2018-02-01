import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import GridList from '../components/GridList'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'
import Typography from 'material-ui/Typography'
import Calendar from '../components/Calendar'
import StarRatingComponent from 'react-star-rating-component'
import 'react-dates/lib/css/_datepicker.css'
import './PublicProfile.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchAdvisor from '../actions/user/advisor/fetch'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class PublicAdvisorProfile extends PureComponent {
  constructor(props) {
    super(props);

    const { date } = props

    this.handleDayClick = this.handleChange.bind(this);

    this.state = {
      date,
    }
  }

  state = {
      ratingDialogOpen: false,
      rating: 0
  }

  componentWillMount() {
    const { fetchAdvisor } = this.props
    const { advisorId } = this.props.match.params

    if (!!advisorId) { fetchAdvisor(advisorId) }
  }


  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const apointment = {
        date: this.state.date,
        msg: this.state.msg,
      }
      console.log(apointment);
    }
    return false
  }

  submitStarRatingForm(event) {
    event.preventDefault()
    const { user } = this.props.advisorProfile
      const rating = {
        advisorId: user._id,
        userId: user._id,
        review: this.state.review,
        rating: this.state.rating,
      }
      console.log(rating);
      this.setState({ ratingDialogOpen: false })
  }

  validateAll() {
    return true
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  calculateRatingAverage(ratings) {
    return 0
  }

  handleClose = () => {
    this.setState({ ratingDialogOpen: false })
  }

  handleOpen = () => {
    this.setState({ ratingDialogOpen: true })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { user, picUrl, tags, ratings } = this.props.advisorProfile
    if(!user) return null

    const ratingAverage = this.calculateRatingAverage(ratings)
    return (
      <div className="PublicProfile-wrap">
        <Paper className="Details">

          <header className="Header-wrap">
            <div className="picture">
              <img className="AdvisorImage"
                src={picUrl}
                alt='Advisor'
              />
            </div>
            <div className="AdvisorLabels">
              <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Badge className="Badge" badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge style={{margin:"18px"}}className="Badge" badgeContent={8} color="primary">
                <MailIcon />
              </Badge>

              <div onClick={this.handleOpen.bind(this)} >
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={ratingAverage}
                  editing={false}
                />
              </div>

            </div>
          </header>


          <Typography type="headline" component="h2" style={{ margin: 20 }} align="center">
            Bio
          </Typography>
          <p>Federico Lega, Ph.D, is a Professor of Healthcare Management and Policy at Bocconi University. He
          received his BA in Economics and Business Administration from Bocconi University, Milan. From the same
          institution, he received his Ph.D. degree in Business Administration in June 2000 after a period spent as a
          Visiting Fellow at the Wagner School of Public Management, New York University. Since 2006 he has been the Head of
          Executive Education for the Healthcare sector at SDA Bocconi School of Management (SDA). From 2002 to 2008, he was
          Director of the Master in Healthcare Management (MIMS - Italian class). </p>


            <Typography type="headline" component="h2" style={{ margin: 20 }} align="center">
              Clients
            </Typography>
            <GridList/>

            <Typography type="headline" component="h2" style={{ margin: 20 }} align="center">
              Partners
            </Typography>
            <GridList/>

            <Typography type="headline" component="h2" style={{ margin: 20 }} align="center">
              Get in contact
            </Typography>

          <form onSubmit={this.submitForm.bind(this)} className="Contact-wrap">
            <div className="TextField">
              <TextField
                className="TextField"
                placeholder="send a message"
                multiline={true}
                InputProps={{ disableUnderline: true  }}
                onChange={this.handleChange("msg")}
              />
            <Button onClick={this.submitForm.bind(this)} raised color="default" fullWidth={true}>
                submit
              </Button>
            </div>
            <div className="Calender">
              <Calendar/>
            </div>
          </form>
        </Paper>

        <div>
          <Dialog
           fullScreen={false}
           open={this.state.ratingDialogOpen}
           onClose={this.handleClose}
           aria-labelledby="responsive-dialog-title"
         >
           <DialogTitle id="responsive-dialog-title">{"Share your thoughts with other clients"}</DialogTitle>
           <DialogContent>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />


            <form onSubmit={this.submitStarRatingForm.bind(this)} className="Contact-wrap">
              <div className="TextField">
                <TextField
                 className="TextField"
                 placeholder="Write a review"
                 multiline={true}
                 InputProps={{ disableUnderline: true  }}
                 onChange={this.handleChange("review")}
                />
              </div>
            </form>
            <DialogContentText>
            </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={this.handleClose} color="primary">
               Disagree
             </Button>
             <Button onClick={this.submitStarRatingForm.bind(this)} color="primary" autoFocus>
               submit
             </Button>
           </DialogActions>
         </Dialog>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, advisorProfile }, { match }) => {
  const signedIn = !!currentUser && !!currentUser._id
  return {
    signedIn,
    advisorProfile,
  }
}

export default connect(mapStateToProps, { push, fetchAdvisor }) (PublicAdvisorProfile  )
