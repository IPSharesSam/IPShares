import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import StarRatingComponent from 'react-star-rating-component'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Toolbar from 'material-ui/Toolbar'
import AppBar from 'material-ui/AppBar'
import {
  RefinementList,
  InstantSearch,
  SearchBox,
  Pagination
} from 'react-instantsearch/dom'
import { connectHits } from 'react-instantsearch/connectors'
import Badge from 'material-ui/Badge'
import PublicAdvisor from 'material-ui-icons/Contacts'
import PublicClient from 'material-ui-icons/PersonPinCircle'
import './Search.css'

const styles = theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  cardContent: {
    minHeight: 180
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
      return (
        <GridList
          cellHeight={'auto'}
          cols={4}
          style={{ marginTop: 12 }}
          spacing={24}
        >
          {hits.map(hit => (
            <GridListTile key={hit.objectID}>
              <Card className={classes.card} style={{ margin: 5 }}>
                <Link to={'/advisor/' + hit.advisorProfileId}>
                  <CardMedia
                    className={classes.media}
                    image={hit.picUrl}
                    title={hit.firstName}
                  />
                </Link>
                <CardContent className={classes.cardContent}>
                  <Typography type="title" component="h2">
                    <Link to={'/advisor/' + hit.advisorProfileId}>
                      {hit.firstName + ' ' + hit.lastName}
                    </Link>
                    <Badge
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
                    </Badge>
                  </Typography>
                  {hit.tags.map(tag => {
                    return <Chip className={classes.chip} label={tag} />
                  })}
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={'/advisor/' + hit.advisorProfileId}
                    className={classes.button}
                    color="default"
                  >
                    Profile
                  </Button>
                  <StarRatingComponent
                    style={{ float: 'right' }}
                    name="rate2"
                    editing={false}
                    starCount={5}
                    value={hit.averageNumber}
                  />
                </CardActions>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      )
    }

    const ConnectedHits = connectHits(CustomHits)

    const { classes } = this.props
    return (
      <Paper style={{ padding: 24, margin: 24 }}>
        <InstantSearch
          appId={process.env.REACT_APP_APP_ID}
          apiKey={process.env.REACT_APP_SEARCH_KEY}
          indexName="profiles"
        >
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar position="static" color="default" style={{ margin: 5 }}>
                <Toolbar>
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
                </Toolbar>
              </AppBar>
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
