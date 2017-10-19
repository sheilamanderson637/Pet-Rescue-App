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
                  <div><img className="pull-left" src={this.props.details.image}/></div>
                  <div className="description"><strong>About {this.props.details.name}</strong> <p>{this.props.details.description}</p></div>
              </div>
              </div>
            
              <div className="row" style={{marginTop: "10px"}} >    
              <div className="col-md-4">
                <div className="local"><strong>Location:</strong> {this.props.details.city}</div>
                <div><strong>Address:</strong> {this.props.details.address}</div>
                <div><strong>Zip:</strong> {this.props.details.zip}</div>
                <div><strong>Phone:</strong> {this.props.details.phone}</div>
                <div><strong>Email:</strong> {this.props.details.email}</div>
              </div>              
              <div className='col-md-8'>
                <img className='map' src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.details.zip}&zoom=14&size=600x150&markers=color:blue&maptype=roadmap&key=AIzaSyAnEUAO6oaQZak1Bis0R6XCESEEmXa_6QQ`}/>
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


