import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {BsSearch} from "react-icons/bs";
import Table from "react-bootstrap/Table";

export default function Services(props) {
  const [search, setSearch] = useState("empty");
  const history = useHistory();
  const {services, setServices} = props;
  useEffect(() => {
    axios.get(`/api/services/${search.val}`).then((response) => {
      console.log("response from GET /api/services", response.data);
      setServices(response.data);
    });
  }, [search]);

  const getserviceInfo = (pid) => {
    axios.get(`/api/availabilities/${pid.user_id}`).then((response) => {
      props.setTimeFrame(response.data);
      props.setServices(pid);
      console.log(
        "This is the response data from GET api/availabilities",
        response.data
      );
      history.push(`/service/?id=${pid.user_id}&title=${pid.title}`);
    });
  };

  const getServices = () => {
    if (Array.isArray(services)) {
      return services.map((s) => {
        return (
          <tr>
            <td>{s.id}</td>
            <td>{s.title}</td>
            <td>{s.category}</td>
            <td>{s.fee}</td>
            <td>{s.user_id}</td>
            <td>{s.created_at}</td>
            <td>
              <Button
                className="button-services"
                onClick={() => {
                  getserviceInfo(s);
                }}
              >
                Select
              </Button>
            </td>
          </tr>
        );
      });
    }
  };

  const serviceElement = getServices();

  return (
    <>
      <div className="searchpagecont">
        <div className="main-container">
          <div id="searchFillLeft" className="col-md-3 filler-left">
            <p>IM HERE</p>
          </div>
          <div className="col-md-6 main-search">
            <InputGroup size="sm" className="mb-3">
              <FormControl
                id="servicesearch"
                aria-label="input"
                // value="{search.val}"
                onChange={(e) => setSearch({val: e.target.value})}
                type="text"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div id="searchFillRight" className="col-md-3 filler-right">
            <p>IM HERE</p>
          </div>
        </div>
        <div className="findresult">
          <Table
            className={
              search === "empty" ? "hiddenSearchResult" : "searchResult"
            }
            striped
            bordered
            hover
            variant="dark"
          >
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Fee</th>
                <th>User ID</th>
                <th>Service Create Date</th>
              </tr>
            </thead>
            <tbody>{serviceElement}</tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
