import React, { Component } from "react";
// import Input from "./components/Input";
// import SubmitButton from "./components/SubmitButton";
// import { Container, Row, Col } from "./components/Grid";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address 2:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          City:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          State:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Zip:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RegistrationForm;