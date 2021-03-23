import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./index.scss";

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
              <td>{Date(a.st_date)}</td>
              <td>{Date(a.end_date)}</td>
              <td>{a.isconfirmed ? "True" : "False"}</td>
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
              <td>{Date(a.start_time)}</td>
              <td>{Date(a.end_time)}</td>
              <td>{a.isconfirmed ? "True" : "False"}</td>
              <td>
                <Button onClick={() => confirmButtoncheck(a.appointment_id)}>
                  Confirm
                </Button>
              </td>
            </tr>
          );
        });
      }
    }
  };

  const appointElement = getAppointment();
  return (
    <div className="appointment_page">
      <h1>Your Appointments</h1>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="appointment_table"
      >
        <thead>
          <tr>
            <th>Start date:</th>
            <th>End date:</th>
            <th>Is Confirmed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{appointElement}</tbody>
      </Table>
    </div>
  );
}
