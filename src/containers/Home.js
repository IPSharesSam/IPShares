import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import authenticate from '../actions/authenticate'


class Home extends PureComponent {
  componentWillMount() {
    this.props.authenticate()
  }
  render() {

    return (
      <div className="Home">
        <h1>homepage</h1>
      </div>
    )
  }
}

export default connect(null, { authenticate, push })(Home)
