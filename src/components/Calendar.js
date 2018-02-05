import React, { PureComponent } from 'react'
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
          selectionColor: '#ff1227',
          textColor: {
            default: '#222',
            active: '#fff'
          },
          weekdayColor: '#ededee',
          headerColor: '#989898',
          floatingNav: {
            background: '#dfdfdf',
            color: '#ff1227',
            chevron: '#ff2626'
          }
       }}
        width={621}
        height={250}
        selectedDate={today}
        disabledDays={[0,6]}
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        keyboardSupport={true}
        autoFocus={false}
        />
    )
  }
}

export default Calendar
