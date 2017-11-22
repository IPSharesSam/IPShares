import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import authenticate from '../actions/authenticate'
import Header from '../components/Header'

class Home extends PureComponent {
  componentWillMount() {
    this.props.authenticate()
  }
  render() {
    console.log(this.props)
    
    return (
      <div className="Home">
        <Header content="Homepage"/>
      </div>
    )
  }
}

export default connect(null, { authenticate, push })(Home)
