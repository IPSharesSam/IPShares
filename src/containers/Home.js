import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import SwipeableViews from 'react-swipeable-views';
// import fetchUser from '../actions/user/fetch'
// import { Header, Timeline, Properties, Wallet, Profile } from '../components'
// import { Tabs, Tab } from 'material-ui/Tabs';


import './Home.css'

class Home extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     slideIndex: 0,
  //   };
  // }

  // handleChange = (value) => {
  //   this.setState({
  //     slideIndex: value,
  //   });
  // };

  // componentWillMount() {
  //   this.props.fetchUser()
  // }

  
  render() {
    // const { currentUser } = this.props
    // if (!currentUser) return null
    return (

      <div className="Home">
        {/* <Header content={currentUser.firstName + ' ' + currentUser.lastName} />
        <Tabs className="tabs-custom" onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab className="tab-custom" label="Timeline" value={0} />
          <Tab className="tab-custom" label="Your IP" value={1} />
          <Tab className="tab-custom" label="Wallet" value={2} />
          <Tab className="tab-custom" label="Profile" value={3} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          <Timeline />
          <Properties />
          <Wallet />
          <Profile />

        </SwipeableViews> */}
        <h1> Hi!</h1>
      </div>
    )
  }
}

// const mapStateToProps = ({ currentUser }) => ({ currentUser })
// export default connect(mapStateToProps, { fetchUser, push })(Home)
export default Home
