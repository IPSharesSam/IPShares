import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import { copyrightSmall } from '../images'

const styles = {
    tab: {
      textAlign: 'center'
    },
    list: {
      padding: '0 10em',
      margin: '0 auto'
    }
  };

class Properties extends PureComponent {

    goRoute() {
        this.props.push(`/trademarks`)
      }
    
    render() {
        return (
            <div style={styles.tab}>
            <GridList style={styles.list} cellHeight='auto' cols={4}>
              <GridTile
                className="gridtile-ip"
                ref="trademarks"
                title="Trademarks"
                subtitle="Subtitle"
                onClick={this.goRoute.bind(this)}
              >
                <img src={copyrightSmall} style={styles.img} alt="" />
              </GridTile>
              <GridTile
                className="gridtile-ip"
                title="Copyrights"
                subtitle="Subtitle"
              >
                <img src={copyrightSmall} alt="" />
              </GridTile>
              <GridTile
                className="gridtile-ip"
                title="Designs"
                subtitle="Subtitle"
              >
                <img src={copyrightSmall} alt="" />
              </GridTile>
              <GridTile
                className="gridtile-ip"
                title="Patents"
                subtitle="Subtitle"
              >
                <img src={copyrightSmall} alt="" />
              </GridTile>
            </GridList>
          </div>
        )
    }
}

export default connect(null, {  push })(Properties)
