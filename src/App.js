import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme'
import Navigation from './components/Navigation.js'
import Loading from './components/Loading'
import Footer from './components/Footer.js'
import Routes from './routes'
import './App.css';

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }
  
  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>      
      <div className="App">
        <Navigation />
        <Loading />
        <Routes />
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
