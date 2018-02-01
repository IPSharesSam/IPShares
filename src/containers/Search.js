import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import StarRatingComponent from 'react-star-rating-component'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import AppBar from 'material-ui/AppBar'
import { InstantSearch, Hits, SearchBox, Pagination } from 'react-instantsearch/dom'
import { connectHits } from 'react-instantsearch/connectors'
import './Search.css'

const styles = theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  cardContent: {
    minHeight: 150,
  },
  button: {
    marginRight: 10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  media: {
    height: 200,
  },
})

export class TitlebarGridList extends PureComponent {
  state = {}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.search(this.state.name)
  }

  render() {
    function CustomHits({ hits }) {
      return (
        <GridList cellHeight={"auto"} cols={5} style={{ marginTop: 12 }} spacing={24}>
          {hits.map(hit => (
            <GridListTile>
            <Card className={classes.card} key={hit.objectID} style={{ margin: 5 }}>
              <Link to={'/advisor/' + hit.advisorProfileId}>
                <CardMedia
                  className={classes.media}
                  image={hit.picUrl}
                  title={hit.firstName}
                />
              </Link>
              <CardContent className={classes.cardContent}>
                <Typography type="title" component="h2">
                  <Link to={'/advisor/' + hit.advisorProfileId}>{hit.firstName + ' ' + hit.lastName}</Link>
                </Typography>
                {hit.tags.map(tag => {
                  return <Chip className={classes.chip} label={tag} />
                })}
            </CardContent>
            <CardActions>
              <Button className={classes.button} raised size="small" color="default">
                <Link to={'/advisor/' + hit.objectID}>Profile</Link>
              </Button>
              <StarRatingComponent style={{ float:"right" }}
                name="rate2"
                editing={false}
                starCount={5}
                value={3}
              />
            </CardActions>
            </Card >
          </GridListTile>
        ))}
      </GridList>
      );
    }

    const ConnectedHits = connectHits(CustomHits);

    function Search() {
      return (
        <ConnectedHits />
      );
    }
    const { classes } = this.props
    return (
      <Paper style={{ padding: 24, margin: 24 }}>
        <InstantSearch
          appId={process.env.REACT_APP_APP_ID}
          apiKey={process.env.REACT_APP_SEARCH_KEY}
          indexName="advisors"
        >
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar position="static" color="default" style={{ margin: 5 }}>
                <Toolbar>
                  <SearchBox className={classes.container}  autoFocus showLoadingIndicator />
                </Toolbar>
              </AppBar>
              <Search />
              <Pagination />
            </Grid>
          </Grid>
        </InstantSearch>
      </Paper>
    )}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TitlebarGridList)
