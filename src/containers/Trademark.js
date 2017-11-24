import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import authenticate from '../actions/authenticate'
import Header from '../components/Header'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import searchTrademarks from '../actions/search'
import './Trademark.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

class Trademark extends PureComponent {
  static PropTypes = {
    authenticated: PropTypes.object,
    searchTrademarks: PropTypes.func
  }

  componentWillMount() {
    this.props.authenticate()
  }

  submitForm(event) {
    event.preventDefault()

    const search = {
      input: this.refs.searchBar.getValue(),
    }

    console.log(search)
    this.props.searchTrademarks(search)
  }


  render() {
    console.log(this.props)
    return (

      <div className="Trademark">
        <Header content="Trademarks" />
            <div style={styles.tab}>
              <h2 style={styles.headline}>Search properties</h2>

              <form onSubmit={this.submitForm.bind(this)}>
                <TextField ref="searchBar" type="text" hintText="Search" />
              </form>

              <RaisedButton
                onClick={this.submitForm.bind(this)}
                label="Search"
                primary={true}
              />

              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })
export default connect(mapStateToProps, { authenticate, push, searchTrademarks })(Trademark)
