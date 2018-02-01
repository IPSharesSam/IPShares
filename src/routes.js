import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import PublicAdvisorProfile from './containers/PublicAdvisorProfile'
import Account from './containers/Account'
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
        <Route path="/account/" component={Account} />
        <Route path="/advisor/:advisorId" component={PublicAdvisorProfile} />
      </div>
    )
  }
}
