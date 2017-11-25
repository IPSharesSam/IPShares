import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchUser from '../actions/user/fetch'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';
import { GridList, GridTile } from 'material-ui/GridList'
import { copyrightsm, registered } from '../images'
import './Home.css'

const styles = {
  tab: {
    textAlign: 'center'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  list: {
    padding: '0 10em',
    margin: '0 auto'
  }
};

class Home extends PureComponent {
  componentWillMount() {
    this.props.fetchUser()
  }

  goRoute() {
    this.props.push(`/trademarks`)
  }

  render() {
    const { currentUser } = this.props
    if (!currentUser) return null
    return (

      <div className="Home">
        <Header content={currentUser.firstName + ' ' + currentUser.lastName} />
        <Tabs className="tabs-custom" >
          <Tab className="tab-custom" label="Timeline" >
            <div style={styles.tab}>
              <h2 style={styles.headline}>Timeline</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
            </div>
          </Tab>
          <Tab className="tab-custom" label="Your IP" >
            <GridList style={ styles.list } cellHeight='auto' cols={4}>
              <GridTile
                ref="trademarks"
                title="Trademarks"
                subtitle="Subtitle"
                onClick={ this.goRoute.bind(this) }
              >
                <img src={registered} style={styles.img}alt="" />
              </GridTile>
              <GridTile
                title="Copyrights"
                subtitle="Subtitle"
              >
                <img src={copyrightsm} alt="" />
              </GridTile>
              <GridTile
                title="Designs"
                subtitle="Subtitle"
              >
                <img src={registered} alt="" />
              </GridTile>
              <GridTile
                title="Patents"
                subtitle="Subtitle"
              >
                <img src={copyrightsm} alt="" />
              </GridTile>
            </GridList>
          </Tab>
          <Tab className="tab-custom" label="Wallet" >
            <div className="wallet">
              
            </div>
          </Tab>
          <Tab className="tab-custom"
            label="Profile"
          >
            <div style={styles.tab}>
              <h2 style={styles.headline}>Profile Settings</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps, { fetchUser, push })(Home)
