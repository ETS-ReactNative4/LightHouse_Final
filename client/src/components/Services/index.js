import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Table from "react-bootstrap/Table";

export default function Services(props) {
  const [search, setSearch] = useState("empty");
  const history = useHistory();
  const { services, setServices } = props;
  useEffect(() => {
    axios.get(`/api/services/${search.val}`).then((response) => {
      setServices(response.data);
    });
  }, [search]);

  const getserviceInfo = (pid) => {
    axios.get(`/api/availabilities/${pid.user_id}`).then((response) => {
      props.setTimeFrame(response.data);
      props.setServices(pid);
      props.setMagicFix("SHOW_CALENDAR");
      history.push(`/service/?id=${pid.user_id}&title=${pid.title}`);
    });
  };

  const getServices = () => {
    if (Array.isArray(services)) {
      return services.map((s) => {
        return (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.title}</td>
            <td>{s.category}</td>
            <td>{s.fee}</td>
            <td>{s.user_id}</td>
            <td>{s.created_at}</td>
            <td>
              <div className="searchTableButton">
                <Button
                  className="button-services"
                  onClick={() => {
                    getserviceInfo(s);
                  }}
                >
                  Select
                </Button>
              </div>
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
          <div className="col-md-6">
            <InputGroup size="sm" className="mb-3 main-search">
              <FormControl
                id="servicesearch"
                aria-label="input"
                // value="{search.val}"
                onChange={(e) => setSearch({ val: e.target.value })}
                type="text"
                aria-describedby="inputGroup-sizing-sm"
              />
              <div className="search-icon">
                <BsSearch
                  className="searchIconActual"
                  variant="outline-secondary"
                >
                  Search
                </BsSearch>
              </div>
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
            <thead className="table">
              <tr>
                <th>Service ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Fee</th>
                <th>User ID</th>
                <th>Service Create Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">{serviceElement}</tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
