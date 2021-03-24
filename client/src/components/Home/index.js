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
        <h1 id="heroHeader">Yalper will relieve you of your worries</h1>
        <p>We'll find you a trusty service provider for any need</p>
        <div className="btn-form">
          <Button
            className="buttonForHome"
            onClick={() => gotToLink("/services")}
          >
            Find a service
          </Button>
        </div>
      </Jumbotron>
      <Container fluid className="main-cards">
        <div className="mainPageRow">
          <Col sm className="card-item">
            <Card className="eachHomeCard" style={{width: "18rem"}}>
              <Card.Img variant="top" src="/images/providers.png" />
              <Card.Body>
                <Card.Title>Trustworthy providers</Card.Title>
                <Card.Text>
                  We have some great services available within your area.
                </Card.Text>
                <div className="btn-form">
                  <Button
                    onClick={() => gotToLink("/services")}
                    variant="primary"
                  >
                    Explore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="card-item">
            <Card className="eachHomeCard" style={{width: "18rem"}}>
              <Card.Img variant="top" src="images/Business.png" />
              <Card.Body>
                <Card.Title>Any service type you can imagine</Card.Title>
                <Card.Text>
                  From mowing your lawn, to doing your taxes, we got you
                  covered.
                </Card.Text>
                <div className="btn-form">
                  <Button
                    onClick={() => gotToLink("/services")}
                    variant="primary"
                  >
                    Explore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="card-item">
            <Card className="eachHomeCard" style={{width: "18rem"}}>
              <Card.Img variant="top" src="images/Service.png" />
              <Card.Body>
                <Card.Title>Easy and quick to use</Card.Title>
                <Card.Text>
                  Yalper saves you the headache and brings you a clean and easy
                  UI.
                </Card.Text>
                <div className="btn-form">
                  <Button
                    onClick={() => gotToLink("/services")}
                    variant="primary"
                  >
                    Explore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </div>
  );
}
