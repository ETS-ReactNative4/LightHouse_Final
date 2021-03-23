import { useState, useEffect } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import axios from "axios";

export default function NewServiceForm(props) {
  const [title, setTitle] = useState("");
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(24);
  const [categoryOptions, setCategoryOptions] = useState([]);
  let timeInput = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      if (Array.isArray(response.data)) {
        const categoryTitles = response.data.map((data) => data.title);
        setCategoryOptions(categoryTitles);
      }
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      formTitle: title,
      formDescription: description,
      formFee: fee,
      formCategory: category,
      user_id: props.user.id,
    };
    const availability = {
      start_time: startTime,
      end_time: endTime,
    };

    axios.post("/api/services/new", { data });
    axios
      .post(`/api/availabilities/${props.user.id}`, { availability })
      .then(() => {
        history.push("/myservices");
      });
  };

  return (
    <Container className="provide-service-form" fluid>
      <Row className="justify-content-md-center">
        <Col xs={7}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>What do you call you service?</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDescription">
                <Form.Label>Give a little bit of description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridFee">
              <Form.Label>How much do you charge for an hour?</Form.Label>
              <Form.Control
                name="fee"
                placeholder="$ Amount for one hour"
                onChange={(event) => setFee(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Which category does it belong to?</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryOptions.map((categoryOption) => (
                  <option value={categoryOption}>{categoryOption}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>When is your start time?</Form.Label>
                <Form.Control
                  as="select"
                  type="text"
                  name="start_time"
                  onChange={(event) => setStartTime(event.target.value)}
                >
                  {timeInput.map((tI) => (
                    <option value={tI}>{tI}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDescription">
                <Form.Label>When is your end time? </Form.Label>
                <Form.Control
                  as="select"
                  type="text"
                  name="end_time"
                  onChange={(event) => setEndTime(event.target.value)}
                >
                  {timeInput.map((tI) => (
                    <option value={tI}>{tI}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button className="service-button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
