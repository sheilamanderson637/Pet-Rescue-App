import React, {Component} from 'react'; 
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Handler from '../../components/Questionnairehandler';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json'
import Petfinder from '../../utils/petfinderapi';

const testObj = { 
  age: 'young',
  sex: 'male',
  size: 'small', 
  zip: '60089',
  animaltype: 'dog',
  breed: 'pug'
}

const state = {
  friends: '',
  petfinderresults: ''
}

function getPetsToRescue (obj) { 
  console.log(obj);
  Petfinder(obj)
  .then((res) => {
      console.log(res);
      console.log(res.data.petfinder.pets.pet)
      state.petfinder = res.data.petfinder.pets.pet
      console.log(state.petfinder)
  }).catch((err) => console.log(err));
}

class Results extends React.Component { 
  
  testObj = { 
    age: 'young',
    sex: 'male',
    size: 'small', 
    zip: '60089',
    animaltype: 'dog',
    breed: 'pug'
  }
  
  state = {
    friends: '',
    petfinderresults: ''
  }
  
  getPetsToRescue = (obj) => { 
    console.log(obj);
    Petfinder(obj)
    .then((res) => {
        console.log(res);
        console.log(res.data.petfinder.pets.pet)
        state.petfinder = res.data.petfinder.pets.pet
        console.log(state.petfinder)
    }).catch((err) => console.log(err));
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
  getPetsToRescue(testObj)
  return ( 
      <div>
        <Wrapper>
          {state.petfinderresults.map(friend => (
          <FriendCard
          id={friend.id.$t}
          key={friend.id.$t}
          name={friend.name.$t}
          image={friend.media.photos.photo[0].$t}
          gender={friend.sex.$t}
          location={friend.contact.city.$t}
          age={friend.age.$t}
          size={friend.size.$t}
          description={friend.description.$t}
          address={friend.contact.address1.$t}
          zip={friend.contact.zip.$t}
          details={friend}
          phone={friend.contact.phone.$t}
          email={friend.contact.email.$t}
          />
          ))};
        </Wrapper>
      </div>
    );
  }
}
export default Results;