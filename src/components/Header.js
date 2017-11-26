import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

const styles = {
    backgroundImage: 'url("/images/header-bg.png")',
    backgroundSize: '100%',
    height: '128px',
    paddingTop: '48px',
    borderBottom: '2px solid #C0C0C0',
    marginTop: '72px'
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