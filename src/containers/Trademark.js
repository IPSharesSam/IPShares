import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import searchTrademarks from '../actions/trademarks/search'
import TrademarkList from '../components/TrademarkList'
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

  submitForm(event) {
    event.preventDefault()

    const search = {
      input: this.refs.searchBar.getValue(),
    }

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

              <TrademarkList />
            </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })
const mapDispatchToProps = ({ push, searchTrademarks })

export default connect(mapStateToProps, mapDispatchToProps)(Trademark)
