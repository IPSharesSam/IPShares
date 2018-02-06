import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import AdvisorProfile from '../components/account/AdvisorProfile'
// import CreatorProfile from '../components/account/CreatorProfile'
import Grid from 'material-ui/Grid'

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  media: {
    height: 'auto',
    width: '20%',
    margin: 'auto'
  }
})

export class Account extends PureComponent {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <Paper style={{ padding: 24, margin: 24 }}>
        <Grid container spacing={24} style={{ marginBottom: 24 }}>
          <Grid item xs={12}>
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="Details" />
                </Tabs>
              </AppBar>

              {value === 0 && (
                <TabContainer>
                  <AdvisorProfile />
                </TabContainer>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Account)
