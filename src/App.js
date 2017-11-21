import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IP Shares</h1>
        </header>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
