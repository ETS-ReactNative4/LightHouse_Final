import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Availability(props) {
  const [avail, setAvail] = useState([]);
  useEffect(() => {
    axios.get(`/api/availabilities`).then((response) => {
      console.log(response.data);
      setAvail(response.data);
    });
  }, []);

  const getAvail = () => {
    return avail.map((s) => {
      return (
        <ListGroup horizontal>
          <ListGroup.Item>{s.id}</ListGroup.Item>
          <ListGroup.Item>{s.start_time}</ListGroup.Item>
          <ListGroup.Item>{s.end_time}</ListGroup.Item>
          <ListGroup.Item>{s.available_date}</ListGroup.Item>
          <ListGroup.Item>{s.services_id}</ListGroup.Item>
          <ListGroup.Item>{s.modified_at}</ListGroup.Item>
        </ListGroup>
      );
    });
  };

  const availElement = getAvail();
  console.log("outside of use effect", availElement);
  return (
    <>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Availability Windows All
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
      <div>{availElement}</div>
    </>
  );
}
