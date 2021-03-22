import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Availability(props) {
  const [appointments, setAppointments] = useState([]);
  const [serviceProviderApp, setServiceProviderApp] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    axios.get(`/api/appointments/${props.user.id}`).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        setStatus("client");
        setAppointments(response.data);
      }
    });
    axios
      .get(`/api/appointments/provider/${props.user.id}`)
      .then((response) => {
        if (response.data.length > 0) {
          setStatus("provider");
          setServiceProviderApp(response.data);
        }
      });
  }, []);

  // console.log("client appointment data", appointments);
  // console.log("Service provider appointment", serviceProviderApp);

  // let clientAppointment = false;
  // let serviceProviderAppointment = false;
  //2 same axios call than in notification, if the call that check for appointment user id match curent user id render
  // the current table format.
  //If curent user === service.users_id, we gonna render a button and anther column to click on a confrim appointment button.
  //for each row we must check if client id match appointment.users_id, it yes render confirm status row that chekc for is confirm
  //next check for each row if user_id match services_users_id && is confirm is false, render a confirm button (create a local state tu update live the button)
  //On click make a axios PUT call to the backend to update the appointment row to isconfirm true
  const confirmButtoncheck = (id) => {
    axios.put(`/api/appointments/${id}`, {
      isconfirmed: true,
    });
  };

  const getAppointment = () => {
    if (status === "client") {
      if (Array.isArray(appointments)) {
        return appointments.map((a) => {
          return (
            <tr>
              <td>{a.users_id}</td>
              <td>{a.st_date}</td>
              <td>{a.end_date}</td>
              <td>{a.isconfirmed ? "True" : "False"}</td>
              <td>{a.services_id}</td>
            </tr>
          );
        });
      }
    }

    if (status === "provider") {
      if (Array.isArray(serviceProviderApp)) {
        return serviceProviderApp.map((a) => {
          return (
            <tr>
              <td>{a.client_id}</td>
              <td>{a.start_time}</td>
              <td>{a.end_time}</td>
              <td>{a.isconfirmed ? "True" : "False"}</td>
              <td>
                <Button onClick={() => confirmButtoncheck(a.appointment_id)}>
                  Confirm appointment
                </Button>
              </td>
              <td>{a.service_id}</td>
            </tr>
          );
        });
      }
    }
  };

  const appointElement = getAppointment();
  console.log("outside of use effect", appointElement);
  return (
    <>
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
