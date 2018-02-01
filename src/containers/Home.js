import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import findImage from '../images/find.png'
import infinityImage from '../images/infinity.png'
import contactImage from '../images/contact.png'
import logoImage from '../images/logo.svg'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 'auto',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logo: {
    height: 'auto',
    margin: '24px auto 24px auto',
    display: 'flex',
    maxWidth: '20%'
  },
  promoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

class Home extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12}><Typography component="h1" type="display1" align="center">For advisors...</Typography></Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.promoCard}>
                  <img alt="contact" className={classes.media} src={contactImage} style={{ marginBottom: 12 }} />
                  <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                    Manage your portfolio
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    As the IP Shares platform is linked to the official IP databases, it's possible to import your public portfolio in an instant.
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    The advisor account will be build and continiously improved according to the needs of the advisors.
                  </Typography>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.promoCard}>
                  <img alt="find us" className={classes.media} src={findImage} style={{ marginBottom: 12 }} />
                  <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                    Get found
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    Your company will be indexed based on your physical location, expertise and appreciation.
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    Cooperation between the advisors will be encouraged. You'll be able to easily get in touch with complimentary expertise, stimulating business, soothing the creators.
                  </Typography>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.promoCard}>
                  <img alt="infinity" className={classes.media} src={infinityImage} style={{ marginBottom: 12 }} />
                  <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                    Be part of the future
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    The IP Shares platform is build as a future-proof system, made to empower creators with respect to the importance of proper advice.
                  </Typography>
                  <Typography component="p" style={{ marginBottom: 12 }} align="center">
                    This gives you as an advisor the chance to embrace and accelerate our upcoming technological evolution.
                  </Typography>
                </div>

            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12}>
              <img alt="logo" className={classes.logo} src={logoImage} />
              <Typography component="h1" type="display1" align="center">The IP Share</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.promoCard}>
                <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                  No fees for using the platform
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  The IP Shares platform will never charge any costs for its
                  facilitations. For instance, if you sell or license work through
                  the platform, you receive the full amount of the agreement
                  without handing in any sort of service- or transaction costs.
                  When you choose to timestamp and store a file, you're only
                  charged for the actual costs of the storation.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.promoCard}>
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
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12}><Typography component="h1" type="display1" align="center">For creators...</Typography></Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.promoCard}>
                <img alt="contact" className={classes.media} src={contactImage} style={{ marginBottom: 12 }} />
                <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                  Design, Patents &amp; Trademarks
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  One-click import all of your registrered trademarks, patents and designs.
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  Sell your actual product or license your invention as you like, directly from yours IPS account.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.promoCard}>
                <img alt="find us" className={classes.media} src={findImage} style={{ marginBottom: 12 }} />
                <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                  Copyright
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  Timestamp all types of work, creating inevitable, decentral evidence of ownership.
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  License your creations like songs, artwork, video's and 3D designs.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.promoCard}>
                <img alt="infinity" className={classes.media} src={infinityImage} style={{ marginBottom: 12 }} />
                <Typography type="headline" component="h2" style={{ marginBottom: 12 }} align="center">
                  Connect with an expert
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  Because intellectual property may require explanation you'll be able to find and link with an advisor.
                </Typography>
                <Typography component="p" style={{ marginBottom: 12 }} align="center">
                  Search a party in your neighbourhood or select one based on their expertise.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
