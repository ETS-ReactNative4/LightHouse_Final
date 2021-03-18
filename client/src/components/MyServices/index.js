import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function MyServices(props) {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState(" ");
  const { apiUrl } = props;
  let history = useHistory();
  console.log("what is props ", props.user.id);
  console.log("Double check", `${apiUrl}${search.val}`);
  useEffect(() => {
    axios.get(`${apiUrl}${props.user.id}`).then((response) => {
      console.log("This DATA",response.data);
      setServices(response.data);
    });
  }, [search]);

  const getServices = () => {
    if ( !services || services.length === 0  || services.name === "error") return [];
    return services.map((s) => {
      return (
        <ListGroup horizontal key={s.id}>
          <ListGroup.Item>{s.id}</ListGroup.Item>
          <ListGroup.Item>{s.title}</ListGroup.Item>
          <ListGroup.Item>{s.category}</ListGroup.Item>
          <ListGroup.Item>{s.fee}</ListGroup.Item>
          <ListGroup.Item>{s.user_id}</ListGroup.Item>
          <ListGroup.Item>{s.created_at}</ListGroup.Item>
          <ListGroup.Item>
          <Button onClick={() => { history.push(`/service/?id=${s.id}&title=${s.title}`)}}>
            Select
          </Button>
          </ListGroup.Item>
        </ListGroup>
      );
    });
  };

  const serviceElement = getServices();

  return (
    <>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Look For My Services
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
        </InputGroup>
      </div>
      <div>{serviceElement}</div>
    </>
  );
}
