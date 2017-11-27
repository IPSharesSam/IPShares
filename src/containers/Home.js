import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import SwipeableViews from 'react-swipeable-views';
import fetchUser from '../actions/user/fetch'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';
import { GridList, GridTile } from 'material-ui/GridList'
import { copyrightSmall } from '../images'
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
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

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
        <Tabs className="tabs-custom" onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab className="tab-custom" label="Timeline" value={0} />
          <Tab className="tab-custom" label="Your IP" value={1} />
          <Tab className="tab-custom" label="Wallet" value={2} />
          <Tab className="tab-custom" label="Profile" value={3} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          <div style={styles.tab}>
            <h2 style={styles.headline}>Timeline</h2>
            <p>
              Add timeline here.
            </p>
          </div>

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

          <div className="wallet" ></div>

          <div style={styles.tab}>
            <h2 style={styles.headline}>Profile Settings</h2>
            <p>
              Add Profile settings here
            </p>
          </div>

        </SwipeableViews>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps, { fetchUser, push })(Home)
