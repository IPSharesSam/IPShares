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
            <Paper className = "profile-paperhttps://github.com/IPSharesSam/IPShares/pull/39/conflict?name=src%252Fcomponents%252FTimeline.js&ancestor_oid=e2c6da1e9720e6f2fddc3bb9a02853a87bb6a246&base_oid=46bf16a5b5d0173bd04fe85a4e7eb81d1a640cd7&head_oid=1203e934e487aa7fab25c08aa072ea0cb7acfe5a">

              <p>  Username: <text className="inside-item">{ currentUser.firstName } { currentUser.lastName }</text></p>
              <p>  Adress: <text className="inside-item">{ currentUser.streetName } { currentUser.streetNumber }, { currentUser.postalCode }, { currentUser.country }</text></p>
              <p>  Email: <text className="inside-item">{ currentUser.email }</text></p>
              <p>  Phonenumber: <text className="inside-item">{ currentUser.phoneNumber }</text></p>
              <p>  <Toggle className = "profile-toggle" labelPosition="left" label = "Subcribed to newsletter:" defaultToggled={ this.checkStatus(currentUser.subscribed) } style={styles.toggle} /></p>
              <p>  <Toggle className = "profile-toggle" labelPosition="left" label = "Public profile:" defaultToggled ={ this.checkStatus(currentUser.public) } style={styles.toggle} /></p>
              <p>  Tags: <text className="inside-item">{ currentUser.tags }</text></p>
            </Paper>

          </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(Profile)
