import queryString from "query-string";
import Calendar from "../Availability/calendar";

export default function Service(props) {
  const params = queryString.parse(props.location.search);
  return (
    <div>
      <h1>Armin</h1>
      <h1>{params.title}</h1>
      <h1>{params.id}</h1>
      <button>Next</button>
      <button>Back</button>
      <div>
        {props.services ? (
          <Calendar
            user={props.user}
            location={props.location}
            timeframe={props.timeframe}
            services={props.services}
            booking={props.booking}
            setBooking={props.setBooking}
          />
        ) : (
          <p>Loadin...</p>
        )}
      </div>
    </div>
  );
}
