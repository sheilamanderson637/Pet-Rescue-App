import React, { Component } from "react";

class Handler extends React.Component {
  constructor(props) {
    super(props);

    state = {
        dogformvalues: {
            sex: '',
            age: '',
            size: '',
            home: '',
            hair: '',
            energy:''
        },
        catformvalues: {
            sex: '',
            age: '',
            size: '',
            friendly: '',
            energy:''
        },
        results: []
    }; 

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
    event.preventDefault();
  };

  export default Handler;