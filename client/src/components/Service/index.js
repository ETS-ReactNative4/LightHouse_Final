import Calendar from "../Availability/calendar";

export default function Service(props) {
  return (
    <div>
      <h1>{props.services.title}</h1>
      <h1>{props.services.id}</h1>
      <button>Next</button>
      <button>Back</button>
      <div>
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
