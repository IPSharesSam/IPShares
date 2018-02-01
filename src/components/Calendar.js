import React, { PureComponent } from 'react'
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
let today = new Date();
let minDate = Number(new Date()) - (24*60*60*1000) * 0; // One week before today
let maxDate = Number(new Date()) + (24*60*60*1000) * 50; // One week before today

export class Calendar extends PureComponent {

  render() {
    return (
      <InfiniteCalendar
        theme={{
          selectionColor: 'rgb(255, 84, 84)',
          textColor: {
            default: '#333',
            active: '#FFF'
          },
          weekdayColor: '#dfdfdf',
          headerColor: '#ff0015',
          floatingNav: {
            background: '#989898',
            color: '#FFF',
            chevron: '#FFA726'
          }
       }}
        width={500}
        height={250}
        selectedDate={today}
        disabledDays={[0,6]}
        minDate={minDate}
        maxDate={maxDate}
        keyboardSupport={true}
        autoFocus={false}
        />
    )
  }
}

export default Calendar
