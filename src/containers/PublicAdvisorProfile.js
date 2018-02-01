import React, { PureComponent } from 'react'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import GridList from '../components/GridList'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'
import Typography from 'material-ui/Typography'
import StarRatingComponent from 'react-star-rating-component'
import 'react-dates/lib/css/_datepicker.css';
import './PublicProfile.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class PublicAdvisorProfile extends PureComponent {
  constructor(props) {
      super(props);

      const { date } = props

      this.handleDayClick = this.handleChange.bind(this);
      this.onFocusChange = this.onFocusChange.bind(this)

      this.state = {
        date,
        focused: false,
        rating: 3,
      };
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

    validateAll() {
      return true
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      })
    }

    onFocusChange(focused) {
      this.setState({ focused });
    }

    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }

  render() {
    const { rating } = this.state

    return (
      <div className="PublicProfile-wrap">
        <div className="Details">

          <header className="Header-wrap">
            <div className="picture">
              <img className="AdvisorImage"
                src="https://www.intermedia.net/assets/images/advisor-icon.png"
                alt='Advisor'
              />
            </div>

            <div className="AdvisorLabels">
              <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                John v.d Berg
              </Typography>
              <Badge className="Badge" badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge style={{margin:"18px"}}className="Badge" badgeContent={8} color="primary">
                <MailIcon />
              </Badge>

              <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
              />

            </div>
          </header>


          <Typography type="headline" component="h2" style={{ margin: 12 }} align="center">
            Bio
          </Typography>
          <p>Federico Lega, Ph.D, is a Professor of Healthcare Management and Policy at Bocconi University. He received his BA in Economics and Business Administration from Bocconi University, Milan. From the same institution, he received his Ph.D. degree in Business Administration in June 2000 after a period spent as a Visiting Fellow at the Wagner School of Public Management, New York University. Since 2006 he has been the Head of Executive Education for the Healthcare sector at SDA Bocconi School of Management (SDA). From 2002 to 2008, he was Director of the Master in Healthcare Management (MIMS - Italian class). </p>


            <Typography type="headline" component="h2" style={{ margin: 12 }} align="center">
              Clients
            </Typography>
          <GridList/>

            <Typography type="headline" component="h2" style={{ margin: 12 }} align="center">
              Partners
            </Typography>
          <GridList/>


            <Typography type="headline" component="h2" style={{ margin: 12 }} align="center">
              Get in contact
            </Typography>
          <form onSubmit={this.submitForm.bind(this)} className="Contact-wrap">
            <Paper className="TextField">
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
            </Paper>
            <div className="Calender">
              <SingleDatePicker
                numberOfMonths={1}
                hideKeyboardShortcutsPanel={true}
                date={this.state.date}
                onDateChange={(date) => this.setState({ date })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }, { match }) => {
  const signedIn = !!currentUser && !!currentUser._id
  const advisorId = match.params.advisorId
  return {
    advisorId,
    signedIn,
  }
}

export default connect(mapStateToProps, { push })(PublicAdvisorProfile)
