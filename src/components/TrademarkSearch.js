import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addTrademarks, searchTrademarks, selectTrademarks } from '../actions/trademarks'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'


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

export class TrademarkSearch extends PureComponent {

  isSelected = (index) => {
    return this.props.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.props.selectTrademarks(selectedRows)
  };

  submitForm(event) {
    event.preventDefault()

    const search = {
      input: this.refs.searchBar.getValue(),
    }

    if (search.input.length < 1) return null

    this.props.searchTrademarks(search)
  }

  saveTrademarks() {
    const { currentUser, searches, selected } = this.props
    const trademarks = []
    selected.map(select => {
      searches[select].userId = currentUser._id
      trademarks.push(searches[select])
      return select
    })
    document.getElementById('searchForm').reset();
  
    this.props.addTrademarks(trademarks)
    
  }

  renderSearches(searchItem, index) {

    const { owner_name, trademark_number, trademark_name, application_date, registration_date, status } = { ...searchItem }

    return (
      <TableRow key={index} value={searchItem} selected={this.isSelected(index)}>
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
      <div style={styles.tab}>
        <h2 style={styles.headline}>Search for trademarks</h2>

        <form id='searchForm' style={styles.form} onSubmit={this.submitForm.bind(this)}>
          <TextField ref="searchBar" type="text" hintText="Search" />
          <RaisedButton
            style={styles.search}
            onClick={this.submitForm.bind(this)}
            label="Search"
            primary={true}
          />
          <RaisedButton
            style={styles.search}
            onClick={this.saveTrademarks.bind(this)}
            label="Save selected trademarks"
            secondary={true}
          />
        </form>

        <Table multiSelectable={true} onRowSelection={this.handleRowSelection}>
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

          <TableBody deselectOnClickaway={false}>
            {searches.map((search, index) => this.renderSearches(search, index))}
          </TableBody>

        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, searches, selected }) => ({ currentUser, searches, selected })
const mapDispatchToProps = ({ push, searchTrademarks, selectTrademarks, addTrademarks })

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkSearch)