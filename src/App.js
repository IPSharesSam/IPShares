import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import Typography from 'material-ui/Typography'
import Routes from './routes'
import Navigation from './components/Navigation'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF1818'
    }
  },
  typography: {
    fontFamily: 'Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    title: {
      fontFamily: '"Bolts SF", Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }
  }
})
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Typography>
        <Navigation />
          <main>
            <Routes />
          </main>
        </Typography>
      </MuiThemeProvider>
    )
  }
}

export default App
