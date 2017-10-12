import React, { Component } from "react";
// import Input from "./components/Input";
// import SubmitButton from "./components/SubmitButton";
// import { Container, Row, Col } from "./components/Grid";
import Appapi from '../../utils/appapi';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {firstName: ''};
    this.state = {lastName: ''};
    this.state = {address: ''};
    this.state = {addressTwo: ''};
    this.state = {city: ''};
    this.state = {state: ''};
    this.state = {zip: ''};
    this.state = {phone: ''};
    this.state = {email: ''};
    this.state = {password: ''};
    this.state = {confirmPassword: ''};

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
    alert('A name was submitted: ' + this.state.firstName);
    Appapi.registerUser(this.state);
  }

  registerUser = () => { 
    Appapi.registerUser(this.state)
        .then(res => { 
            console.log(res);
            // this.setState({ results: res.data.response.docs}) 
        }).catch(err => console.log(err));
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address 2:
          <input type="text" name="addressTwo"value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Zip:
          <input type="text" name="zip" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="confirmPassword" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RegistrationForm;