import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'

const tileData = [
  {
    title: 'Musician',
    img:
      'https://static01.nyt.com/images/2017/04/21/arts/21minorities-inyt/21minorities-inyt-jumbo.jpg'
  },
  {
    title: 'Painter',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Paolo_Salvati_-_expressionist_painter.JPG'
  },
  {
    title: 'Scientist',
    img:
      'https://www.timeshighereducation.com/sites/default/files/Pictures/web/x/x/v/female_scientist_at_work_160114.jpg'
  },
  {
    title: 'Scientist',
    img:
      'https://cdn-media-1.lifehack.org/wp-content/files/2015/07/15-Signs-Youre-A-Natural-Born-Writer-Even-If-You-Dont-Feel-You-Are.jpg'
  },
  {
    title: 'Scientist',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm1OoIhqaD4abBSBgXxgEBguxuv882iPzbJ2UhDvSUQtJpD5v'
  }
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: 'rgb(255, 255, 255)'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
  }
})

function SingleLineGridList(props) {
  const { classes } = props

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
                title: classes.title
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SingleLineGridList)
