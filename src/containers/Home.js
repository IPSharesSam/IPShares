import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import authenticate from '../actions/authenticate'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Home extends PureComponent {
  static PropTypes = {
    authenticated: PropTypes.object
  }
  componentWillMount() {
    this.props.authenticate()
  }


  render() {
    const { authenticated } = this.props
    return (

      <div className="Home">
        <Header content={authenticated.firstName + ' ' + authenticated.lastName} />
        <Tabs>
          <Tab label="Timeline" >
            <div>
              <h2 style={styles.headline}>Timeline</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
            </div>
          </Tab>
          <Tab label="Your IP" >
            <div>
              <h2 style={styles.headline}>Your Intellectual Properties</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Wallet" >
            <div>
              <h2 style={styles.headline}>Wallet Info</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Profile"
          >
            <div>
              <h2 style={styles.headline}>Profile Settings</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })
export default connect(mapStateToProps, { authenticate, push })(Home)
