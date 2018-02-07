import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import Routes from './routes'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import Error from './components/Error'
import bg from './images/bg.png'
import './App.css'

const TitleFont =
  '"Bolts", Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        background: 'linear-gradient(45deg, #ff1227 30%, #ff1227 90%)',
        borderRadius: 12,
        color: 'white',
        height: 32,
        padding: '0 10px',
        boxShadow: '0 2px 3px 1px rgba(38, 38, 38, 0.2)'
      }
    }
  },
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
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily:
      '"Franklin Gothic Medium", "Franklin", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    headline: {
      fontFamily: TitleFont,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display1: {
      fontFamily: TitleFont,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    },
    display2: {
      fontFamily: TitleFont,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400
    }
  }
})
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Error />
        <Loading />
        <Navigation />
        <main className="bg" style={{ backgroundImage: `url(${bg})` }}>
          <Routes />
        </main>
      </MuiThemeProvider>
    )
  }
}

export default App
