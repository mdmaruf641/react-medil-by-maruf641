import React from "react";
import "./Banner.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div id="home" className="banner d-flex align-items-center">
      <Container>
        <Row>
          <div className="bnr-dtls col-md-6 text-center">
            <h1>Take care of your Health Now</h1>
            <h3>Sale up to 30% all products</h3>
            <Button className="bnr-btn" variant="light">
              Shop Now
            </Button>
          </div>
          <div className="col-md-6"></div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
