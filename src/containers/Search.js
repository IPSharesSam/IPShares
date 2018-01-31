import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {InstantSearch, Hits, SearchBox} from 'react-instantsearch/dom'
import './Search.css'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

const tileData = [
  {"title":"Ventosanzap","author":"Leola Worshall","img":"https://robohash.org/eautdelectus.png?size=200x200&set=set1"},
  {"title":"Wrapsafe","author":"Hailey Throughton","img":"https://robohash.org/teneturvoluptasut.png?size=200x200&set=set1"},
  {"title":"It","author":"Erl Prover","img":"https://robohash.org/fugititaqueet.bmp?size=200x200&set=set1"},
  {"title":"Bitchip","author":"Dougy Gutsell","img":"https://robohash.org/quiaestsint.bmp?size=200x200&set=set1"},
  {"title":"Tres-Zap","author":"Talbert Hubery","img":"https://robohash.org/cupiditatesedsit.bmp?size=200x200&set=set1"},
  {"title":"Bitchip","author":"Marillin Porker","img":"https://robohash.org/abliberoanimi.png?size=200x200&set=set1"},
  {"title":"Job","author":"Josefina Seadon","img":"https://robohash.org/officiisvelitofficia.png?size=200x200&set=set1"},
  {"title":"Mat Lam Tam","author":"Ellerey Batterson","img":"https://robohash.org/iustoetet.jpg?size=200x200&set=set1"},
  {"title":"Konklux","author":"Eleanora Choat","img":"https://robohash.org/etatfugit.png?size=200x200&set=set1"},
  {"title":"Opela","author":"Kylila Tapin","img":"https://robohash.org/cumetdeleniti.png?size=200x200&set=set1"},
  {"title":"Regrant","author":"Loralie Gason","img":"https://robohash.org/beataeundedolores.jpg?size=200x200&set=set1"},
  {"title":"Span","author":"Kaleb Sivewright","img":"https://robohash.org/dolorenonet.png?size=200x200&set=set1"},
  {"title":"Tres-Zap","author":"Ced Ronaghan","img":"https://robohash.org/doloremametrerum.png?size=200x200&set=set1"},
  {"title":"Prodder","author":"Bradney Stevenson","img":"https://robohash.org/nonodiohic.png?size=200x200&set=set1"},
  {"title":"Opela","author":"Brewer Clerc","img":"https://robohash.org/etnatusfacere.jpg?size=200x200&set=set1"},
  {"title":"Sub-Ex","author":"Kristel Gon","img":"https://robohash.org/quosimiliqueea.jpg?size=200x200&set=set1"},
  {"title":"Cookley","author":"Barri Syder","img":"https://robohash.org/minusutitaque.bmp?size=200x200&set=set1"},
  {"title":"Temp","author":"Carroll Baser","img":"https://robohash.org/rerumvelitvel.jpg?size=200x200&set=set1"},
  {"title":"Stim","author":"Mike Tankus","img":"https://robohash.org/sequidolorquo.bmp?size=200x200&set=set1"},
  {"title":"Gembucket","author":"Saidee Croix","img":"https://robohash.org/beataevoluptatesquas.bmp?size=200x200&set=set1"}
]

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
    function Product({hit}) {
      return (
        <GridListTile>
          <img src="https://robohash.org/eautdelectus.png?size=200x200&set=set1" alt={hit.firstName} />
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
      );
    };

    function Search() {
      return (
        <div className="container">
          <GridList cellHeight={180} className={classes.gridList} cols={5}>
            <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}>
              <form className={classes.container} noValidate autoComplete="off">
                <SearchBox autoFocus showLoadingIndicator />
              </form>
            </GridListTile>
            <Hits hitComponent={Product}/>
          </GridList>
        </div>
      );
    }
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <InstantSearch
          appId={process.env.REACT_APP_APP_ID}
          apiKey={process.env.REACT_APP_SEARCH_KEY}
          indexName="advisors"
        >
        <Search />
        </InstantSearch>
      </div>
    )}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TitlebarGridList)