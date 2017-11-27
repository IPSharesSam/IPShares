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
        <Header content="Creators / Advisors" />
        <iframe src="https://snazzymaps.com/embed/31388" width="100%" height="600px" style={ styles.map } title="map"></iframe>
      </div>
    )
  }
}



export default Advisor
