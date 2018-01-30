import React, { PureComponent } from 'react'
import GridList from '../components/GridList'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import MailIcon from 'material-ui-icons/Mail'
import StarBorder from 'material-ui-icons/StarBorder'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './PublicProfile.css'

class PublicProfile extends PureComponent {
  constructor(props) {
  super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    const past = {
      before: new Date(),
    }
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
              <Badge style={{marginRight:"18px"}}className="Badge" badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <StarBorder />
              <StarBorder />
              <StarBorder />
              <StarBorder />
              <Badge style={{margin:"18px"}}className="Badge" badgeContent={8} color="primary">
                <MailIcon />
              </Badge>
            </div>
          </header>
          <h1>BIO</h1>
          <p>Federico Lega, Ph.D, is a Professor of Healthcare Management and Policy at Bocconi University. He received his BA in Economics and Business Administration from Bocconi University, Milan. From the same institution, he received his Ph.D. degree in Business Administration in June 2000 after a period spent as a Visiting Fellow at the Wagner School of Public Management, New York University. Since 2006 he has been the Head of Executive Education for the Healthcare sector at SDA Bocconi School of Management (SDA). From 2002 to 2008, he was Director of the Master in Healthcare Management (MIMS - Italian class). </p>

          <h2>Public Clients</h2>
          <GridList/>
          <h2>Public Partners</h2>
          <GridList/>

          <h2>Contact</h2>
          <div className="Contact-wrap">
            <Paper className="TextField">
              <TextField
                className="TextField"
                placeholder="send a message"
                multiline={true}
                InputProps={{ disableUnderline: true  }}
              />
              <Button raised color="default" fullWidth="true">
                submit
              </Button>
            </Paper>
            <div className="Calender">
              <DayPicker
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
                disabledDays={past}
              />
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default PublicProfile
