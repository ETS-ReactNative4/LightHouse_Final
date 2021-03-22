import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
export default function Availability(props) {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios.get(`/api/appointments/${props.user.id}`).then((response) => {
      console.log(response.data);
      setAppointments(response.data);
    });
  }, []);
  let appointme
  const getAppointment = () => {
    if (Array.isArray(appointments)) {
      return appointments.map((a) => {
        return (
          <tr>
            <td>{a.users_id}</td>
            <td>{a.st_date}</td>
            <td>{a.end_date}</td>
            <td>{a.isconfirmed}</td>
            <td>{a.services_id}</td>
          </tr>
        );
      });
    }
  };

  const appointElement = getAppointment();
  console.log("outside of use effect", appointElement);
  return (
    <>
      {/* <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              All your appointments
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
      <div><Table striped bordered hover variant="dark"> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Start date:</th>
            <th>End date:</th>
            <th>Confirmed?</th>
            <th>Service ID:</th>
          </tr>
        </thead>
        <tbody>{appointElement}</tbody>
      </Table>
    </>
  );
}
