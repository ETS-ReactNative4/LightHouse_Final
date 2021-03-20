import { useState, useEffect } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function NewServiceForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(24);
  const [categoryOptions, setCategoryOptions] = useState([]);

useEffect(() => {
  axios.get("/api/categories").then((response) => {
    const categoryTitles = response.data.map((data) => data.title)
    setCategoryOptions(categoryTitles);
  });
 }, []);
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = {
      formTitle: title,
      formDescription: description,
      formFee: fee,
      formCategory: category,
      user_id: props.user.id
    };
    const availability = {
      start_time: startTime,
      end_time: endTime,
    };
    console.log("Final data is", data);

    axios.post("/api/services/new", { data }).then((response) => {
      console.log("success!!");
    });
    axios
      .post(`/api/availabilities/${props.user.id}`, { availability })
      .then((response) => {
        console.log("response from saving a new service", response);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title of service</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title of the service you would like to provide"
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter the description of your service"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridFee">
        <Form.Label>Fee</Form.Label>
        <Form.Control
          name="fee"
          placeholder="Please enter the amount in $"
          onChange={(event) => setFee(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select"  onChange={(e)=>setCategory(e.target.value)}>
          {categoryOptions.map((categoryOption) => ( 
            <option value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Availablility start time</Form.Label>
          <Form.Control
            type="text"
            name="start_time"
            placeholder="Enter the stating hour at with you wish to be available each day"
            onChange={(event) => setStartTime(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Availablility end time</Form.Label>
          <Form.Control
            type="text"
            name="end_time"
            placeholder="Enter the ending hour at with you wish to stop being available"
            onChange={(event) => setEndTime(event.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}