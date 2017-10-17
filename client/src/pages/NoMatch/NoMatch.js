import React from "react";
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron></Jumbotron>
        <Jumbotron>
          <h1>
            Oh no! It looks like we're in the dog house. 
          </h1>
          <h4>
            Please try a different link that works.
          </h4>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default NoMatch;