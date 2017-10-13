import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            gender={friend.gender}
            location={friend.location}
            age={friend.age}
            size={friend.size}
            description={friend.description}
            address={friend.address}
            zip={friend.zip}
            details={friend}
            phone={friend.phone}
            email={friend.email}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;





