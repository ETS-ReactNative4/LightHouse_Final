import Calendar from "../Availability/calendar";
import "./index.scss";
export default function Service(props) {
  return (
    <div className="calendarMain">
      <h1 className="singleServiceTag">Service : {props.services.title}</h1>
      <h2 className="singleServiceTag2">
        Description : {props.services.description}
      </h2>
      <h2 className="singleServiceTag2">Fee : {props.services.fee} $/H</h2>

      <div className="the_calendar">
        {props.magicFix ? (
          <Calendar
            className="calendarComp"
            user={props.user}
            location={props.location}
            timeframe={props.timeframe}
            services={props.services}
            booking={props.booking}
            setBooking={props.setBooking}
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
