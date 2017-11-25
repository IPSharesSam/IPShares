import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import './TrademarkItem.css'

class TrademarkItem extends PureComponent {
  static propTypes = {
    trademark_name: PropTypes.string,
    application_date: PropTypes.string,
    application_number: PropTypes.string,
    application_language: PropTypes.bool
  }

  render() {
    const { trademark_name, application_date, application_number, application_language } = this.props

    return(
      <div>
        <ul>
            <li> trademark: { trademark_name }</li>
            <li> application date: { application_date }</li>
            <li> application number: { application_number }</li>
            <li> application language: { application_language }</li>
        </ul>
      </div>
    )
  }
}

export default TrademarkItem