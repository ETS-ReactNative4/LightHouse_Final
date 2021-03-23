import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Availability(props) {
  const [appointments, setAppointments] = useState([]);
  const [serviceProviderApp, setServiceProviderApp] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    axios.get(`/api/appointments/${props.user.id}`).then((response) => {
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
