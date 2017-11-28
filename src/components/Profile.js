import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Toggle from 'material-ui/Toggle';
import './Profile.css'
import Paper from 'material-ui/Paper'

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

class Profile extends PureComponent {

    checkStatus(bool) {
        return bool.toString()
    }
    render() {
        const { currentUser } = this.props

        return (


          <div className="profile-element">
            <Paper className = "profile-paper">

              <p>Username: { currentUser.firstName } { currentUser.lastName }</p>
              <p>Adress: { currentUser.streetName } { currentUser.streetNumber }, { currentUser.postalCode }, { currentUser.country }</p>
              <p>Email: { currentUser.email }</p>
              <p>Phonenumber: { currentUser.phoneNumber }</p>
              <Toggle className = "profile-toggle" labelPosition="left" iconStyle= {{alignText: 'left'}}label = "Subcribed to newsletter:"  style={styles.toggle} />
              <Toggle className = "profile-toggle" labelPosition="left" label = "Public profile:"  style={styles.toggle} />
              <p>Tags: { currentUser.tags }</p>
            </Paper>

          </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(Profile)
