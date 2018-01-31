import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom'
import { connectHits } from 'react-instantsearch/connectors'
import './Search.css'

const styles = theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
        <GridList cellHeight={180} cols={5}>
          {hits.map(hit => (
            <GridListTile key={hit.objectID} titleBackground={'green'}>
              <img src={hit.picUrl} alt={hit.firstName} />
              <GridListTileBar
                title={hit.firstName + ' ' + hit.lastName}
                subtitle={<span>city: {hit.city}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
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
            <Grid item xs={12} md={2}>
              <SearchBox className={classes.container}  autoFocus showLoadingIndicator />
            </Grid>
            <Grid item xs={12} md={10}>
              <Search />
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