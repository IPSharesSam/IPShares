import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import PublicProfile from './containers/PublicProfile'
import AdvisorProfile from './containers/AdvisorProfile'
import CreatorProfile from './containers/CreatorProfile'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import Search from './containers/Search'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/search" component={Search} />
        <Route path="/profiles" component={PublicProfile} />
        <Route path="/account/advisor" component={AdvisorProfile} />
        <Route path="/account/creator" component={CreatorProfile} />
      </div>
    )
  }
}
