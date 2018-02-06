import React from 'react'
import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import { connect } from 'react-redux'
import { clearError } from '../actions/user/loading'
import request from 'superagent'

class Error extends React.Component {
  state = {
    open: false
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps

    if (!error) {
      this.setState({ open: true })
    }
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.props.clearError()
    this.setState({ open: false })
  }

  render() {
    const { error } = this.props
    if (!error) return null
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={!!error}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{error}</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={'close'}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ error }) => ({
  error
})

export default connect(mapStateToProps, { clearError, request })(Error)
