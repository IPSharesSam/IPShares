import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import findImage from '../images/find.png'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 24
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
        <Grid container spacing={24}>
          <Grid item xs={12}><Typography type="title" align="center">For advisors</Typography></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <img className={classes.media} src={findImage} />
                <Typography type="headline" component="h2">
                  Manage your portfolio
                </Typography>
                <Typography component="p">
                  As the IP Shares platform is linked to the official IP databases, it's possible to import your public portfolio in an instant.
                </Typography>
                <Typography component="p">
                  The advisor account will be build and continiously improved according to the needs of the advisors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <img className={classes.media} src={findImage} />
                <Typography type="headline" component="h2">
                  Manage your portfolio
                </Typography>
                <Typography component="p">
                  As the IP Shares platform is linked to the official IP databases, it's possible to import your public portfolio in an instant.
                </Typography>
                <Typography component="p">
                  The advisor account will be build and continiously improved according to the needs of the advisors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <img className={classes.media} src={findImage} />
                <Typography type="headline" component="h2">
                  Manage your portfolio
                </Typography>
                <Typography component="p">
                  As the IP Shares platform is linked to the official IP databases, it's possible to import your public portfolio in an instant.
                </Typography>
                <Typography component="p">
                  The advisor account will be build and continiously improved according to the needs of the advisors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home)