import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import PublicProfile from './containers/PublicProfile'
import AdvisorProfile from './containers/AdvisorProfile'
// import SignUp from './users/SignUp'
import SignIn from './containers/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/Profiles" component={PublicProfile} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/account/advisor" component={AdvisorProfile} />
      </div>
    )
  }
}
