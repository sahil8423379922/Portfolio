import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainimage from "./bgimage.png";
import { Card, Fade, Image } from "react-bootstrap";

function UpperCard() {
  return (
    <Container className="mt-4">
      <Fade in={open}>
        <Card className="py-4 px-4" style={{ backgroundColor: "#f6fcff" }}>
          <Row className="align-items-center">
            <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
              <Image src={mainimage} fluid rounded />
            </Col>
            <Col xs={12} sm={8}>
              <h1 className="display-5 fw-bold">Sahil Jaiswal</h1>
              <p className="fs-4">
                Hi, I am an IT Trainer at Kochartech Kochiva. Also, I am a
                Robotics Trainer at Bright Champs and a Freelance App Developer.
                I completed my education in Electronics and Communication
                Engineering from Allen House Institute of Technology Kanpur in
                2023.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Linkedin
              </button>
            </Col>
          </Row>
        </Card>
      </Fade>
    </Container>
  );
}

export default UpperCard;
