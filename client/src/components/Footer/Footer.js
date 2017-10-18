import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import FYellow from "../../f-yellow.png";
import Facebook from "../../facebook.png";
import Twitter from "../../twitter.png";
import YouTube from "../../youtube.png";
import Instagram from "../../instagram.png";
import "./Footer.css";

const Footer = () => {
    return (
      <div className="footer">
        <Container>
          <Row className="row">
            <Col className="contact">
              <p>Chicago, IL 60611</p>
              <p>312 123 4567</p>
              <p>admin@findingfido.com</p>
            </Col>
            <Col>
              <img src={FYellow}  className="logoF" alt="Finding Fido" />
            </Col>
            <Col className="social">
              dsfgfd
            </Col>
          </Row>
        </Container>
      </div>  
    );
  }
  
    export default Footer;