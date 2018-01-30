import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import Routes from './routes'
import Navigation from './components/Navigation'
import './App.css'

const TitleFont = '"Bolts SF", Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF1818'
    }
  },
  typography: {
    fontFamily: 'Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    title: {
      fontFamily: TitleFont
    },
    headline: {
      fontFamily: TitleFont
    },
    display1: {
      fontFamily: TitleFont
    }
  }
})
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Navigation />
          <main>
            <Routes />
          </main>
      </MuiThemeProvider>
    )
  }
}

export default App
