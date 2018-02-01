import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import './GridList.css'


const tileData = [
  {
    title: 'whatUpGansta',
    img: 'https://www.intermedia.net/assets/images/advisor-icon.png',
  },
  {
    title: 'Trademark Advisor',
    img: 'http://www.reliancenipponlife.com/images/advisor_banner.jpg',
  },
  {
    title: 'whatUpGansta',
    img: 'https://fthmb.tqn.com/qQCDGniyAFfWwdIbJow4lDacJJM=/1280x854/filters:no_upscale():fill(transparent,1)/138710659-56a819ce3df78cf7729c1cde.jpg',
  },
  {
    title: 'Patent lawyer',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm1OoIhqaD4abBSBgXxgEBguxuv882iPzbJ2UhDvSUQtJpD5v',
  },
]


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'rgb(255, 255, 255)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
  },
})


function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className="SingleLine-wrap">
      <GridList className={classes.gridList} cols={4.0}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
