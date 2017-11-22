import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

const styles = {
    backgroundImage: 'url("/images/header-background.png")',
    backgroundSize: '100%',
    height: '128px',
    paddingTop: '48px'
}
class Header extends PureComponent {
    static PropTypes = {
        content: PropTypes.String
    }

  render() {
    return (
      <div style={ styles } className="Header" >
          <Title content={ this.props.content }/>
      </div>
    )
  }
}

export default Header