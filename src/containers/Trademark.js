import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SwipeableViews from 'react-swipeable-views';
import searchTrademarks from '../actions/trademarks/search'
import { TrademarkList } from '../components'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
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
  },
  form: {
    margin: '2em'
  },
  search: {
    marginLeft: '2em'
  }
};

class Trademark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  submitForm(event) {
    event.preventDefault()

    const search = {
      input: this.refs.searchBar.getValue(),
    }

    if (search.input.length < 1) return null

    this.props.searchTrademarks(search)
  }

  renderSearches(searchItem, index) {
    
    const { owner_name, trademark_number, trademark_name, application_date, registration_date, status } = { ...searchItem}

    return (
      <TableRow key={index} value={ searchItem }>
        <TableRowColumn>{owner_name}</TableRowColumn>
        <TableRowColumn>{trademark_name}</TableRowColumn>
        <TableRowColumn>{trademark_number}</TableRowColumn>
        <TableRowColumn>{application_date}</TableRowColumn>
        <TableRowColumn>{registration_date}</TableRowColumn>
        <TableRowColumn>{status}</TableRowColumn>
      </TableRow>
    )
  }

  render() {
    const { searches } = this.props
    return (

      <div className="Trademark">
        <Header content="Trademarks" />

        <Tabs className="tabs-custom" onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab className="tab-custom" label="Your Trademarks" value={0} ></Tab>
          <Tab className="tab-custom" label="Search" value={1}></Tab>
        </Tabs>

        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          
          <TrademarkList />
          

          <div style={styles.tab}>
            <h2 style={styles.headline}>Search for trademarks</h2>

            <form style={styles.form} onSubmit={this.submitForm.bind(this)}>
              <TextField ref="searchBar" type="text" hintText="Search" />
              <RaisedButton
                style={styles.search}
                onClick={this.submitForm.bind(this)}
                label="Search"
                primary={true}
              />
              <RaisedButton
                style={styles.search}
                label="Save selected trademarks"
                secondary={true}
              />
            </form>


            <Table multiSelectable={true}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Owner name</TableHeaderColumn>
                  <TableHeaderColumn>Trademark name</TableHeaderColumn>
                  <TableHeaderColumn>Trademark number</TableHeaderColumn>
                  <TableHeaderColumn>Application date</TableHeaderColumn>
                  <TableHeaderColumn>Registration date</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody>
                {searches.map(this.renderSearches)}
              </TableBody>

            </Table>
          </div>

        </SwipeableViews>
      </div>
    )
  }
}

const mapStateToProps = ({ searches }) => ({ searches })
const mapDispatchToProps = { push, searchTrademarks }

export default connect(mapStateToProps, mapDispatchToProps)(Trademark)
