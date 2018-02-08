import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import StarRatingComponent from 'react-star-rating-component'
// import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import {
  RefinementList,
  InstantSearch,
  SearchBox,
  Pagination
} from 'react-instantsearch/dom'
import { connectHits } from 'react-instantsearch/connectors'
// import Badge from 'material-ui/Badge'
// import PublicAdvisor from 'material-ui-icons/Contacts'
import Star from 'material-ui-icons/Star'
// import PublicClient from 'material-ui-icons/PersonPinCircle'
import './Search.css'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  button: {
    marginRight: 10
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  media: {
    height: 200
  }
})

export class TitlebarGridList extends PureComponent {
  state = {}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault()
    this.props.search(this.state.name)
  }

  render() {
    function CustomHits({ hits }) {
      const profileLink = hit => {
        const id =
          hit.type === 'advisor' ? hit.advisorProfileId : hit.creatorProfileId
        return '/' + hit.type + '/' + id
      }
      const fullName = hit => hit.firstName + ' ' + hit.lastName

      return (
        <Grid container spacing={24}>
          {hits.map(hit => (
            <Grid item xs={12} md={6} lg={4} key={hit.objectID}>
              <Card className={classes.card}>
                <Link to={profileLink(hit)}>
                  <CardMedia
                    className={classes.media}
                    image={hit.picUrl}
                    title={fullName(hit)}
                  />
                </Link>
                <CardContent style={{ paddingBottom: 12 }}>
                  <Typography type="title" component="h2">
                    <Link to={profileLink(hit)}>{fullName(hit)}</Link>
                    {/* <Badge
                      style={{ float: 'right', margin: '10px' }}
                      className="Badge"
                      badgeContent={0}
                      color="primary"
                    >
                      <PublicAdvisor />
                    </Badge>
                    <Badge
                      style={{ float: 'right', margin: '10px' }}
                      className="Badge"
                      badgeContent={0}
                      color="primary"
                    >
                      <PublicClient />
                    </Badge> */}
                  </Typography>
                  {/* {hit.tags.length > 0 ? hit.tags.map((tag, index) => {
                    return <Chip key={index} className={classes.chip} label={tag} />
                  }) : null} */}
                  <Typography
                    type="subheading"
                    component="h3"
                    style={{ marginTop: 8 }}
                  >

                    {hit.type === 'advisor' ?
                      <StarRatingComponent
                        renderStarIcon={() => <Star />}
                        name="rate2"
                        editing={false}
                        value={hit.averageNumber}
                      /> : <p></p>}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )
    }

    const ConnectedHits = connectHits(CustomHits)

    const { classes } = this.props
    return (
      <Paper style={{ padding: 24 }}>
        <InstantSearch
          appId={process.env.REACT_APP_APP_ID}
          apiKey={process.env.REACT_APP_SEARCH_KEY}
          indexName="profiles"
        >
          <Grid container spacing={24}>
            <Grid item xs={12} md={3}>
              <Paper className={classes.root} elevation={1}>
                <SearchBox
                  className={classes.container}
                  autoFocus
                  showLoadingIndicator
                />
                <RefinementList
                  attributeName="type"
                  limitMax={5}
                  operator="or"
                  showMore={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <ConnectedHits />
              <Pagination />
            </Grid>
          </Grid>
        </InstantSearch>
      </Paper>
    )
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TitlebarGridList)
