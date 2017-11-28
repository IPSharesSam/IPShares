import React, { PureComponent } from 'react'
import './Footer.css'
import { logo} from '../images'
const styles = {
    backgroundColor: '#595959',
    height: '256px',
    position: 'relative',


}
class Footer extends PureComponent {

  render() {
    return (
      <div style={ styles } className="Footer" >
        <h3 className="footer-text">Founded with love from Amsterdam</h3>
        <img className="footer-logo" src={ logo } alt="" />
        
      </div>
    )
  }
}

export default Footer
