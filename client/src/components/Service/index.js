import Calendar from "../Availability/calendar";
import "./index.scss";
export default function Service(props) {
  return (
    <div>
      <h1>Service : {props.services.title}</h1>
      <h1>Description : {props.services.description}</h1>
      <h1>Fee : {props.services.fee} $/H</h1>

      <div className="the_calendar">
        {props.magicFix ? (
          <Calendar
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
