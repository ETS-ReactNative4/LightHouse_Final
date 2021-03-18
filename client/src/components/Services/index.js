import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState, history } from "react";
import { useHistory } from "react-router-dom";

export default function Services(props) {
  const [search, setSearch] = useState(" ");
  const history = useHistory();
  const { services, setServices } = props;
  useEffect(() => {
    axios.get(`/api/services/${search.val}`).then((response) => {
      console.log("response from api services", response.data);
      setServices(response.data);
    });
  }, [search]);

  const getserviceInfo = (pid) => {
    axios.get(`/api/availabilities/${pid.user_id}`).then((response) => {
      props.setTimeFrame(response.data);
      props.setServices([pid]);
      console.log(response.data);
      history.push(`/service/?id=${pid.user_id}&title=${pid.title}`);
    });
  };

  const getServices = () => {
    if (services) {
      return services.map((s) => {
        return (
          <ListGroup horizontal>
            <ListGroup.Item>{s.id}</ListGroup.Item>
            <ListGroup.Item>{s.title}</ListGroup.Item>
            <ListGroup.Item>{s.category}</ListGroup.Item>
            <ListGroup.Item>{s.fee}</ListGroup.Item>
            <ListGroup.Item>{s.user_id}</ListGroup.Item>
            <ListGroup.Item>{s.created_at}</ListGroup.Item>
            <Button
              onClick={() => {
                getserviceInfo(s);
              }}
            >
              Select
            </Button>
          </ListGroup>
        );
      });
    }
  };

  const serviceElement = getServices();

  return (
    <>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Look For Services
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="input"
            // value="{search.val}"
            onChange={(e) => setSearch({ val: e.target.value })}
            type="text"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
          <h1>My Services</h1>
        </InputGroup>
      </div>
      <div>{serviceElement}</div>
    </>
  );
}
