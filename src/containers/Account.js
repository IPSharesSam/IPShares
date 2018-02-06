import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import AdvisorProfile from '../components/account/AdvisorProfile'
import CreatorProfile from '../components/account/CreatorProfile'
import Grid from 'material-ui/Grid'
import { connect } from 'react-redux'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export class Account extends PureComponent {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    if (!this.props.currentUser) {
      return null
    }
    const { type } = this.props.currentUser
    const { value } = this.state

    if (!type) return null

    return (
      <Paper style={{ padding: 24, margin: 24 }}>
        <Grid container spacing={24} style={{ marginBottom: 24 }}>
          <Grid item xs={12}>
            <div className={'root'}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="Details" />
                </Tabs>
              </AppBar>

              <TabContainer>
                {type === 'creator' ? <CreatorProfile /> : <AdvisorProfile />}
              </TabContainer>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const currentUser = user.currentUser
  return { currentUser }
}

export default connect(mapStateToProps)(Account)
