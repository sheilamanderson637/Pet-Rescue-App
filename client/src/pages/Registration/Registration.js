import React, { Component } from "react";
import { Button, Form, FormGroup, Input, FormText, Label, Row, Container, Col, Jumbotron, Card } from 'reactstrap';
// import Input from "./components/Input";
// import SubmitButton from "./components/SubmitButton";
// import { Container, Row, Col } from "./components/Grid";
import Appapi from '../../utils/appapi';
import "./Registration.css";


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      addressTwo: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    event.preventDefault();
    alert('Processing new user with email: ' + this.state.firstName);
    Appapi.registerUser(this.state);
  }

  registerUser = (data) => { 
    Appapi.registerUser(data)
        .then(res => { 
            console.log(res);
            // this.setState({ results: res.data.response.docs}) 
        }).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="mb20">
      <Container>
      <Jumbotron>
        <h1>Let's get you registered</h1>
        <p className="lead">Please fill out the form and we'll activate a profile, this way you can save an animal you're interested in adopting to easily find the dog or cat when you return.</p>
      </Jumbotron>  
      <Form onSubmit={this.handleSubmit}>  
        <Row> 
          <Col>          
            <FormGroup>
              <Label>First Name:</Label>
                <Input type="text" name="firstName" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name:</Label>
              <Input type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Address:</Label>
              <Input type="text" name="address" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Address 2:</Label>
              <Input type="text" name="addressTwo"value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>City:</Label>
              <Input type="text" name="city" value={this.state.value} 
              onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>State:</Label> 
              <Input type="text" name="state" value={this.state.value} 
              onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label>Zip:</Label>
            <Input type="text" name="zip" value={this.state.value} 
              onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
            <Label>Phone:</Label>
            <Input type="text" name="phone" value={this.state.value} 
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
            <Label>Email:</Label>
            <Input type="text" name="email" value={this.state.value} 
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
            <Label>Password:</Label>
            <Input type="text" name="password" value={this.state.value} 
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
            <Label>Confirm Password:</Label>
            <Input type="text" name="confirmPassword" value={this.state.value} 
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          </Row>
          <Row>
            <Col>
          <div>
              <Button color="warning" type="submit" value="Submit">Submit</Button>
          </div>
          </Col>
          </Row>  
        </Form>
      </Container>
      </div>
    );
  }
}

export default RegistrationForm;