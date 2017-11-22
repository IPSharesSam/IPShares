import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import authenticate from '../actions/authenticate'
import Header from '../components/Header'

class Home extends PureComponent {
  static PropTypes = {
    authenticated: PropTypes.object
  }
  componentWillMount() {
    this.props.authenticate()
  }
  
  render() {
    const { authenticated } = this.props
    return (
      
      <div className="Home">
        <Header content={ authenticated.firstName + ' ' + authenticated.lastName }/>
      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })
export default connect( mapStateToProps, { authenticate, push })(Home)
