import {useEffect, useState} from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./MyServices.scss";

export default function MyServices(props) {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState(" ");
  const {apiUrl} = props;

  console.log("THIS IS USER PROPS", props.user);

  let history = useHistory();
  console.log("Value of props.user.id in MyService component ", props.user.id);
  // console.log("URL and search value in MyServices", `${apiUrl}${search.val}`);
  useEffect(() => {
    axios.get(`${apiUrl}${props.user.id}`).then((response) => {
      console.log("Response from GET call in My Services", response.data);
      setServices(response.data);
    });
  }, [search]);

  const getServices = () => {
    if (!services || services.length === 0 || services.name === "error")
      return [];
    return (
      Array.isArray(services) &&
      services.map((s) => {
        return (
          <tr>
            <td>{s.id}</td>
            <td>{s.title}</td>
            <td>{s.category}</td>
            <td>{s.fee}</td>
            <td>{s.user_id}</td>
            <td>{s.created_at}</td>
            <td>
              <div className="searchTableButton">
                <Button
                  onClick={() => {
                    props.setMagicFix(false);
                    history.push(`/service/?id=${s.id}&title=${s.title}`);
                  }}
                >
                  Select
                </Button>
              </div>
            </td>
          </tr>
        );
      })
    );
  };

  // const getServices = () => {
  //   if (!services || services.length === 0 || services.name === "error")
  //     return [];
  //   return (
  //     Array.isArray(services) &&
  //     services.map((s) => {
  //       return (
  //         <ListGroup horizontal key={s.id}>
  //           <ListGroup.Item>{s.id}</ListGroup.Item>
  //           <ListGroup.Item>{s.title}</ListGroup.Item>
  //           <ListGroup.Item>{s.category}</ListGroup.Item>
  //           <ListGroup.Item>{s.fee}</ListGroup.Item>
  //           <ListGroup.Item>{s.user_id}</ListGroup.Item>
  //           <ListGroup.Item>{s.created_at}</ListGroup.Item>
  //           <ListGroup.Item>
  //             <Button
  //               onClick={() => {
  //                 props.setMagicFix(false);
  //                 history.push(`/service/?id=${s.id}&title=${s.title}`);
  //               }}
  //             >
  //               Select
  //             </Button>
  //           </ListGroup.Item>
  //         </ListGroup>
  //       );
  //     })
  //   );
  // };

  const serviceElement = getServices();

  return (
    <>
      <div className="myService-pageCont">
        <div className="myService-main-container">
          <div id="myServiceFillLeft" className="col-md-3 filler-left">
            <p>IM HERE</p>
          </div>
          <div className="col-md-6">
            <h1 className="namePropMyService">
              {props.user.full_name}, here are the services you own
            </h1>
          </div>
          <div id="myServiceFillRight" className="col-md-3 filler-right">
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
