import React, { PureComponent } from 'react'
import fetchTrademarks from '../actions/trademarks/fetch'
import { connect } from 'react-redux'
import TrademarkItem from './TrademarkItem'
// import './TrademarkList.css'

export class TrademarkList extends PureComponent {


  componentWillMount() {
    this.props.fetchTrademarks()
  }

  renderTrademarks(trademark, index) {
    console.log(trademark)
    return (
      <TrademarkItem key={index} {...trademark} />
    )
  }

  render() {
    const { trademarks } = this.props
    return(
      <div className="TrademarkList">
          { trademarks.map(this.renderTrademarks) }
      </div>
    )
  }
  }

// export default TrademarkList
const mapStateToProps = ({ trademarks }) => ({ trademarks })
const mapDispatchToProps = { fetchTrademarks }

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkList)