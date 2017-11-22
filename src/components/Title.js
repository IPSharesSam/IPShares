import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const styles = {
    color: '#595959',
}

class Title extends PureComponent {
    static PropTypes = {
        content: PropTypes.String
    }

  render() {
    return (
      <h1 style={ styles }>{ this.props.content }</h1>
    )
  }
}

export default Title