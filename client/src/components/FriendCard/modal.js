import React from "react";
import "./FriendCard.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import FriendCard from "./FriendCard";

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
        <Modal  isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
            <ModalHeader><div className="animalName"><strong>{this.props.details.name}</strong></div></ModalHeader>
        <ModalBody>   
            
                <div className="row">    
                <div  className="col-md-12" > 
                    <div><img className="pull-left" alt={this.props.details.name} src={this.props.details.image}/></div>
                    <div className="description"><strong>About {this.props.details.name}</strong> <p>{this.props.details.description}</p></div>
                </div>
                </div>
              
                <div className="row contact" >    
                <div className="col-md-12">
                  <div className="local"><strong>Location:</strong> {this.props.details.location}</div>
                  <div><strong>Address:</strong> {this.props.details.address}</div>
                  <div><strong>Zip:</strong> {this.props.details.zip}</div>
                  <div><strong>Phone:</strong> {this.props.details.phone}</div>
                  <div><strong>Email:</strong> {this.props.details.email}</div>
                </div>
                </div>
                
          </ModalBody>
                 
          <ModalFooter>
            <Button color="warning" onClick={this.toggle}>Save to Your Profile</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Details;
