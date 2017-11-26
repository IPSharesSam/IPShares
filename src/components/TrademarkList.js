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
    console.log(trademark)
  
    const { trademark_name, application_date, application_number, application_language } = {...trademark}
    return (
      <TableRow key={index}>
        <TableRowColumn>{trademark_name}</TableRowColumn>
        <TableRowColumn>{application_date}</TableRowColumn>
        <TableRowColumn>{application_number}</TableRowColumn>
        <TableRowColumn>{application_language}</TableRowColumn>
      </TableRow>
    )
  }
  

  render() {
    const { trademarks } = this.props
    return (
      <Table >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Trademark name</TableHeaderColumn>
            <TableHeaderColumn>Application date</TableHeaderColumn>
            <TableHeaderColumn>Application number</TableHeaderColumn>
            <TableHeaderColumn>Application language</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {trademarks.map(this.renderTrademarks)}
        </TableBody>
        
      </Table>
    )
  }
}

// export default TrademarkList
const mapStateToProps = ({ trademarks }) => ({ trademarks })
const mapDispatchToProps = { fetchTrademarks }

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkList)