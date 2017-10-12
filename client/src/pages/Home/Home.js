import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Home.css";
import "../../cat-and-dog.jpg";

const Home = () =>   
  <Container className="bord-box background">
    <Row>
			<Col xs="3"></Col>
      <Col xs="auto">.col-auto - variable width content</Col>
      <Col xs="3"></Col>
		</Row>
		<Row>
			<Col xs="3"></Col>
      <Col xs="auto">Your one stop source for finding the rescue dog of your dreams! Take a short quiz to figure out the dogs best suited to your lifestyle and needs. Save your search results by creating an account.</Col>
      <Col xs="3"></Col>
		</Row>
	</Container>

	export default Home;