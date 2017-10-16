import React, {Component} from 'react'; 
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Handler from '../../components/Questionnairehandler';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json'
import Petfinder from '../../utils/petfinderapi';

const 

const state = {
  friends: '',
  petfinderresults: ''
}

class Results extends React.Component { 
   
  state = {
    friends: '',
    petfinderresults: '',
    testObj: { 
      age: 'young',
      sex: 'male',
      size: 'small', 
      zip: '60089',
      animaltype: 'dog',
      breed: 'pug'
    } 
    
  }

  getPetsToRescue (obj) { 
    console.log(obj);
    Petfinder(obj)
    .then((res) => {
        console.log(res);
        console.log(res.data.petfinder.pets.pet)
        state.petfinder = res.data.petfinder.pets.pet
        console.log(state.petfinder)
    }).catch((err) => console.log(err));
  }

  render() {
    this.getPetsToRescue(this.state.testObj)
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
export default Results;