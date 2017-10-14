import React from "react";
import "./FriendCard.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FriendCard from "./FriendCard";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    console.log(this.props);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel}View Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
            <ModalHeader toggle={this.toggle}><div className="animalName"><strong>{this.props.details.name}</strong></div></ModalHeader>
        <ModalBody>   
            
                <div className="img-container">
                    <img src={this.props.details.image} />
                </div>
                <div className="local"><strong>Location:</strong> {this.props.details.location}</div>
                <div><strong>Address:</strong> {this.props.details.address}</div>
                <div><strong>Zip:</strong> {this.props.details.zip}</div>
                <div><strong>Phone:</strong> {this.props.details.phone}</div>
                <div><strong>Email:</strong> {this.props.details.email}</div>
                <div><strong>Description:</strong> {this.props.details.description}</div>

                
                 </ModalBody>
                 
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save Dog to Your Profile</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Details;

