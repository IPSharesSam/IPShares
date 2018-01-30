import React, { PureComponent } from 'react'
import GridList from '../components/GridList'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import './PublicProfile.css'

class PublicProfile extends PureComponent {


  render() {
    return (
      <div className="PublicProfile-wrap">
        <div className="Details">
          <header className="Header-wrap">
            <img className="AdvisorImage"
              src="https://www.intermedia.net/assets/images/advisor-icon.png"
              alt='Advisor'
            />
            <h2>NAME</h2>
            <h2>LABEL</h2>
            <h2>RATING</h2>
            <h2>PARTNER COUNT</h2>
            <h2>CLIENT COUNT</h2>
          </header>
          <h1>BIO</h1>
          <p>This are can be used for a bio and share his expertise</p>

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
              <Button raised color="default">
                submit
              </Button>
            </Paper>
            <p>Plan a telephone call</p>
          </div>
        </div>
      </div>
    )
  }
}



export default PublicProfile
