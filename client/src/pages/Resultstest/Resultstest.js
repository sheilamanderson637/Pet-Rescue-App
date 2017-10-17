import React, {Component} from 'react';

// import {Button, Row, Container, Col, Jumbotron} from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json';
import PetfinderAPI from '../../utils/petfinderapi';

class Resultstest extends Component {

    constructor(props) {
        super(props);
        this.state = { friends, 
        petfinderResults: [],
        testtext: 'help me help you', 
        testObj: { 
            age: 'young',
            sex: 'male',
            size: 'small', 
            zip: '60089',
            animaltype: 'dog',
            breed: 'pug'
        }
        };         
    }



    componentDidMount() { 
        this.getPetsToRescue(this.state.testObj) 
        .then((res) => {
            console.log(res);
            console.log(res.data.petfinder.pets.pet)
            // state.petfinder = res.data.petfinder.pets.pet
            // console.log(state.petfinder)
            this.setState({petfinderResults: res.data.petfinder.pets.pet})
        }).catch((err) => console.log(err));
    }

    getPetsToRescue (obj) { 
        console.log(obj);
        PetfinderAPI(obj);

    }
    
    render() { 
        
        return(
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
        {this.state.petfinderResults.map(friend => (
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
    );
  }
}

export default Resultstest;