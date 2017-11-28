import React, { PureComponent } from 'react'
import { logo} from '../images'
import './Timeline.css'



class Timeline extends PureComponent {

    render() {
        return (


              <div className="timeline">

                  <div className = "timeline-item">
                    <p>You registered on this site on date: 28.09.2017 </p>
                    <img className="timeline-logo" src={ logo } alt="" />
                  </div>

                 <svg width="500" height="250"><line x1="250" y1="15" x2="250" y2="250" stroke="grey"/></svg>

                  <div className = "timeline-item">
                    <img className="timeline-logo" src={ logo } alt="" />
                    <p>Your trademarks were uploaded: 12.10.2017</p>
                  </div>

              </div>


        )
    }
}

export default Timeline
