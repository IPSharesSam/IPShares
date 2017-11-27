import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Home,
  SignIn,
  SignUp,
  Trademark,
  Advisor
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/trademarks" component={Trademark} />
        <Route path="/advisors" component={Advisor} />
        
      </div>
    )
  }
}