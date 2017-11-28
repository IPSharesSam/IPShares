import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import { GridList, GridTile } from 'material-ui/GridList';
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

              <p>  Username: <text className="inside-item">{ currentUser.firstName } { currentUser.lastName }</text></p>
              <p>  Adress: <text className="inside-item">{ currentUser.streetName } { currentUser.streetNumber }, { currentUser.postalCode }, { currentUser.country }</text></p>
              <p>  Email: <text className="inside-item">{ currentUser.email }</text></p>
              <p>  Phonenumber: <text className="inside-item">{ currentUser.phoneNumber }</text></p>
              <p>  <Toggle className = "profile-toggle" labelPosition="left" iconStyle= {{alignText: 'left'}}label = "Subcribed to newsletter:" defaultToggled={ this.checkStatus(currentUser.subscribed) } style={styles.toggle} /></p>
              <p>  <Toggle className = "profile-toggle" labelPosition="left" label = "Public profile:" defaultToggled ={ this.checkStatus(currentUser.public) } style={styles.toggle} /></p>
              <p>  Tags: <text className="inside-item">{ currentUser.tags }</text></p>
            </Paper>

          </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(Profile)
