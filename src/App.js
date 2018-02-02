import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import Routes from './routes'
import Navigation from './components/Navigation'
import './App.css'

const TitleFont = '"Space Mono", Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#FF1818'
  //   }
  // },
  palette: {
    primary: {
      light: '#ffffff',
      main: '#eeeeee',
      dark: '#bcbcbc',
      contrastText: '#212529'
    },
    secondary: {
      light: '#ff6f60',
      main: '#e53935',
      dark: '#ab000d',
      contrastText: '#ffffff',
    }
  },
  typography: {
    fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
