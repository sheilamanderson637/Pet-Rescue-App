import React, { Component } from "react";

class Handler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results = [],
      dogform = { 
        age: ''
      }, 
      catform: { 
        age: ''
      }
    }

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
    alert('The questionnaire was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return ( 
      <div>{props.children}</div>
    ); 
  }

}

export default Handler;