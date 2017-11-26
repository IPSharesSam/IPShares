import React, { PureComponent } from 'react'
import fetchTrademarks from '../actions/trademarks/fetch'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


export class TrademarkList extends PureComponent {


  componentWillMount() {
    this.props.fetchTrademarks()
  }

  renderTrademarks(trademark, index) {
  
    const { owner_name, trademark_number, trademark_name, application_date, registration_date, status } = {...trademark}
    return (
      <TableRow key={index}>
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
    const { trademarks } = this.props
    return (
      <Table >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Owner name</TableHeaderColumn>
            <TableHeaderColumn>Trademark name</TableHeaderColumn>
            <TableHeaderColumn>Trademark number</TableHeaderColumn>
            <TableHeaderColumn>Application date</TableHeaderColumn>
            <TableHeaderColumn>Registration date</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {trademarks.map(this.renderTrademarks)}
        </TableBody>
        
      </Table>
    )
  }
}

const mapStateToProps = ({ trademarks }) => ({ trademarks })
const mapDispatchToProps = { fetchTrademarks }

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkList)