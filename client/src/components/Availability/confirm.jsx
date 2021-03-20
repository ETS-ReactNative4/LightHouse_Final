import axios from "axios";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";

export default function Confirm(props) {
  const history = useHistory();
  const data = props.booking;
  const yes = () => {
    axios.post("/api/appointments", { data }).then(
      (response) => {
        console.log(response);
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

  console.log("this is the confim props", props.booking);
  const date = JSON.stringify(props.booking.st_date);
  return (
    <>
      {props.booking ? (
        <div className="card">
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                Do you wish to confirm your appointment for{" "}
                {props.booking.title} {date}
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <div>
            <Button variant="success" onClick={() => yes()}>
              Yes
            </Button>{" "}
            <Button variant="danger" onClick={() => clickNo()}>
              No
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
