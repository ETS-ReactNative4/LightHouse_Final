import {useState} from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function NewServiceForm(props) {
  const [state, setState] = useState({
    title: null,
    description: null,
    fee: null,
    category: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    // console.log(this.inputFullNameRef.current.value)
    console.log("Final data is", data);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event)
    // console.log(event.target.name)
    // console.log(event.target.value)
    setState({
      [event.target.name]: event.target.value,
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
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter the description of your service"
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridFee">
        <Form.Label>Fee</Form.Label>
        <Form.Control name="fee" placeholder="Please enter the amount in $" />
      </Form.Group>

      <Form.Group controlId="formGridCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          placeholder="Please enter the category name for your serice, i.e: plumbing"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
