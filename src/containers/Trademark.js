import React, { PureComponent } from 'react'
import Header from '../components/Header'
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { TrademarkList, TrademarkSearch } from '../components'


class Trademark extends PureComponent {
  

  componentWillMount() {
    this.setState({
      slideIndex: 0
    });
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  

  render() {
    return (

      <div className="Trademark">
        <Header content="Trademarks" />

        <Tabs className="tabs-custom" onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab className="tab-custom" label="Your Trademarks" value={0} ></Tab>
          <Tab className="tab-custom" label="Search" value={1}></Tab>
        </Tabs>

        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          
          <TrademarkList />
          

          <TrademarkSearch />

        </SwipeableViews>
      </div>
    )
  }
}


export default Trademark
