import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import Routes from './routes'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Reboot />
        <Navigation />
          <main>
            <Routes />
          </main>
      </MuiThemeProvider>
    );
  }
}

export default App
