import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

const styles = {
  root: {
    width: '100%'
  }
}

class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { loading, classes } = this.props
    if (!loading) return null

    return (
      <div className={classes.root}>
        <LinearProgress color="secondary" />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({
  loading: loading.length > 0
})

export default compose(withStyles(styles), connect(mapStateToProps))(Loading)
