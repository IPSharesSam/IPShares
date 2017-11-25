import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import searchTrademarks from '../actions/trademarks/search'
import TrademarkList from '../components/TrademarkList'
import './Trademark.css'

const styles = {
  tab: {
    textAlign: 'center'
  },
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
    return (

      <div className="Trademark">
        <Header content="Trademarks" />
        <Tabs className="tabs-custom" >
          <Tab className="tab-custom" label="Your Trademarks" >
            <div style={styles.tab}>
              <h2 style={styles.headline}>Trademarks</h2>
              <TrademarkList />
            </div>
          </Tab>

          <Tab className="tab-custom" label="Search">
            <div style={styles.tab}>
              <h2 style={styles.headline}>Search</h2>

              <form onSubmit={this.submitForm.bind(this)}>
                <TextField ref="searchBar" type="text" hintText="Search" />
              </form>

              <RaisedButton
                onClick={this.submitForm.bind(this)}
                label="Search"
                primary={true}
              />
              
            </div>
          </Tab>
        </Tabs>

      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })
const mapDispatchToProps = ({ push, searchTrademarks })

export default connect(mapStateToProps, mapDispatchToProps)(Trademark)
