import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
// import SignUp from './users/SignUp'
// import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/sign-up" component={SignUp} />
        <Route exact path="/" component={SignIn} /> */}
      </div>
    )
  }
}