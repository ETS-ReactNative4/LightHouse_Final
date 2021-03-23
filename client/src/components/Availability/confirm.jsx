import axios from "axios";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import "./confirm.scss";

export default function Confirm(props) {
  const history = useHistory();
  const data = props.booking;
  const yes = () => {
    axios.post("/api/appointments", { data }).then(
      () => {
        history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const clickNo = () => {
    props.setBooking([]);
    history.push("/calendar");
  };

  const dateString = props.booking.st_date.toString();

  return (
    <>
      {props.booking ? (
        <div className="mainConfirmContainer">
          <div className="cardContainer">
            <div className="confirmText">
                <h3 id="confirmationQ">
                  Do you wish to confirm your appointment for the service: <b>
                  {props.booking.title}</b> 
                  <h4 id="confirmationDate">{dateString}</h4>
                </h3>
            </div>
            <div className="confirmButtons">
              <Button className="confirmBtn" variant="success" onClick={() => yes()}>
                Yes
              </Button>{" "}
              <Button variant="danger" onClick={() => clickNo()}>
                No
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </>
  );
}
