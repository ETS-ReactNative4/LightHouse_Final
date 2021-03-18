import React from "react";

import {
  AvailabilityCalendar,
  AvailabilityEvent,
  MsSinceMidnightRange,
  Booking,
  Range,
  CalendarThemeProp,
} from "react-availability-calendar";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

const msInHour = 60 * 60 * 1000;

const App = (props) => {
  const now = new Date();

  const onAvailabilitySelected = (a) =>
    console.log("Availability slot selected: ", a);

  const onChangedCalRange = (r) =>
    console.log("Calendar range selected (fetch bookings here): ", r);

  // TODO find a way to take avail block and make it blockout period when a block is not true
  // receiving avalaible 9 to 14 everyday
  // [9,14]

  const avail = [props.timeframe.start_time, props.timeframe.end_time]; //this is the receiving input

  const blockOutPeriods = [
    [0 * msInHour, avail[0] * msInHour],
    [(avail[1] + 1) * msInHour, 24 * msInHour],
  ];

  const bookings = [
    {
      startDate: new Date(2020, 2, 1, 19),
      endDate: new Date(2020, 2, 1, 20),
    },
    {
      startDate: new Date(2020, 2, 1, 16, 30),
      endDate: new Date(2020, 2, 1, 17),
    },
  ];

  const providerTimeZone = "America/New_York";

  return (
    <div style={{ width: 350 }}>
      <AvailabilityCalendar
        bookings={bookings}
        providerTimeZone={providerTimeZone}
        moment={moment}
        initialDate={now}
        onAvailabilitySelected={onAvailabilitySelected}
        onCalRangeChange={onChangedCalRange}
        blockOutPeriods={blockOutPeriods}
      />
    </div>
  );
};

export default App;
