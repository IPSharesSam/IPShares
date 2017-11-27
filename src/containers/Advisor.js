import React, { PureComponent } from 'react'
import { Header } from '../components'

const styles = {
  map: {
    border: 'none'
  }
}
class Advisor extends PureComponent {


  render() {
    return (
      <div className="Advisor">
        <iframe title="custom-map" src="https://snazzymaps.com/embed/31388" width="100%" height="600px" style={ styles }></iframe>
      </div>
    )
  }
}



export default Advisor
