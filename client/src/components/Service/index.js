import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import queryString from "query-string";
import Calendar from "../Availability/calendar";

export default function Service(props) {
  // const { id, title } = useParams();
  // console.log("armin XX props", props);
  // console.log("IDID", title);

  const params = queryString.parse(props.location.search);

  return (
    <div>
      <h1>Armin</h1>
      <h1>{params.title}</h1>
      <h1>{params.id}</h1>
      <button>Next</button>
      <button>Back</button>
      <div>
        <Calendar user={props.user} location={props.location} />
      </div>
    </div>
  );
}
