import "./Home.scss";
import {useHistory} from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import queryString from "query-string";
import Image from "react-bootstrap/Image";

export default function Home(props) {
  const history = useHistory();
  const gotToLink = (link) => {
    history.push(link);
  };
  const params = queryString.parse(props.location.search);
  return (
    <div className="home_page">
      <Jumbotron className="jumbBig">
        <h1>{params.title}</h1>
        <h1>Yalper will relieve you of your worries</h1>
        <p>We'll find you a trusty service provider for any need</p>
        <div className="btn-form">
          <Button onClick={() => gotToLink("/")}>Find a service</Button>
        </div>
      </Jumbotron>
      <Container fluid className="main-cards">
        <div className="mainPageRow">
          <Col sm className="card-item">
            <Card style={{width: "18rem"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="card-item">
            <Card style={{width: "18rem"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="card-item">
            <Card style={{width: "18rem"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="btn-form">
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </div>
  );
}
