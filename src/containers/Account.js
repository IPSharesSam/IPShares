import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import contactImage from '../images/contact.png'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import AdvisorProfile from '../components/AdvisorProfile'
import CreatorProfile from '../components/CreatorProfile'
import Grid from 'material-ui/Grid'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 'auto',
    width: '20%',
    margin: 'auto',
  },
})

export class Account extends PureComponent {

  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <Paper style={{ padding: 24, margin: 24 }}>
        <Grid container spacing={24} style={{ marginBottom: 24 }}>
          <Grid item xs={12} >
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Account" />
                <Tab label="Creator" />
                <Tab label="Advisor" href="#" />
              </Tabs>
            </AppBar>

            {value === 0 && <TabContainer className={classes.accountTab}>
              <img alt="Contact" className={classes.media} src={contactImage} style={{ marginBottom: 12, float:"left" }} />
              <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                Manage your portfolio
              </Typography>
              <Typography component="p" style={{ marginBottom: 22 }} align="center">
                As the IP Shares platform is linked to the official IP databases, it's possible to import your public portfolio in an instant.
              </Typography>
              <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                How all users collectively create value
              </Typography>
              <Typography component="p" style={{ marginBottom: 12 }} align="center">
                This is made possible by the IP Share crypto token. All
                transactions made on the platform are done with IP Shares.
                If for instance someone buys a product in the shop, the
                creator will receive the agreed amount in IP Shares. The
                buyer might pay with Euro's but instead of the seller
                receiving Euro's, the Euro's will be used to buy the lowest offer in
                the IP Shares order book which are given to the seller.
              </Typography>
            </TabContainer>}

            {value === 1 && <TabContainer>
              <CreatorProfile/>
            </TabContainer>}

            {value === 2 && <TabContainer>
              <AdvisorProfile/>
            </TabContainer>}

          </div>
        </Grid>
        </Grid>
      </Paper>
    )
  }
}


export default withStyles(styles)(Account)
