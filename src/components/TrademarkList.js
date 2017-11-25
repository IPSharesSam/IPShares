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
    return (
      <TrademarkItem key={index} {...trademark} />
    )
  }

  render() {
    const { trademarks } = this.props
    console.log('Trademarks: ', trademarks)
    return(
      <div className="TrademarkList">
          {/* { this.props.trademarks.map(this.renderTrademarks) } */}
          <TrademarkItem/>

      </div>
    )
  }
  }

// export default TrademarkList
const mapStateToProps = ({ trademarks }) => ({ trademarks })
const mapDispatchToProps = { fetchTrademarks }

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkList)