import React, {Component} from 'react'; 
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Handler from '../../components/Questionnairehandler';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json'
import Petfinder from '../utils/petfinderapi';


class Results extends React.Component { 

  state = { 
    friends
  }
  // getPetsToRescue = (obj) => { 
  //   console.log(obj);
  //   Petfinder(obj)
  //   .then((res) => {
  //       console.log(res);
  //       console.log(res.data.petfinder.pets.pet)
  //       state.petfinder = res.data.petfinder.pets.pet
  //       console.log(state.petfinder)
  //   }).catch((err) => console.log(err));
  // }

render() {
  // getPetsToRescue(testObj)
  return ( 
      <div>
        <Wrapper>
          {state.friends.map(friend => (
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
          ))};
        </Wrapper>
      </div>
    );
  }
}
export default Results;