import React, { PureComponent } from 'react'
import 'react-dates/initialize';
import GridList from '../components/GridList'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'
import StarBorder from 'material-ui-icons/StarBorder'
import moment from 'moment'
import { SingleDatePicker, SingleDatePickerWrapper } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import './PublicProfile.css'

class PublicProfile extends PureComponent {
  constructor(props) {
      super(props);

      const { date, focused } = props

      this.handleDayClick = this.handleChange.bind(this);
      this.onFocusChange = this.onFocusChange.bind(this)

      this.state = {
        date,
        focused: true,
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

  render() {


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
              <h2>John van der Burg</h2>
              <Badge className="Badge" badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge style={{margin:"18px"}}className="Badge" badgeContent={8} color="primary">
                <MailIcon />
              </Badge>
              <StarBorder />
              <StarBorder />
              <StarBorder />
              <StarBorder />
            </div>
          </header>
          <h1>BIO</h1>
          <p>Federico Lega, Ph.D, is a Professor of Healthcare Management and Policy at Bocconi University. He received his BA in Economics and Business Administration from Bocconi University, Milan. From the same institution, he received his Ph.D. degree in Business Administration in June 2000 after a period spent as a Visiting Fellow at the Wagner School of Public Management, New York University. Since 2006 he has been the Head of Executive Education for the Healthcare sector at SDA Bocconi School of Management (SDA). From 2002 to 2008, he was Director of the Master in Healthcare Management (MIMS - Italian class). </p>

          <h2>Public Clients</h2>
          <GridList/>
          <h2>Public Partners</h2>
          <GridList/>

          <h2>Contact</h2>
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
                onFocusChange={this.onFocusChange}
                keepOpenOnDateSelect={false}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}


// Contact-wrap shouldn't be visable for non login.


export default PublicProfile
