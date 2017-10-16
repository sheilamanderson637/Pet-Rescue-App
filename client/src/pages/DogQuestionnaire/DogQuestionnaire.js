import React, { Component } from "react";
import { Container } from 'reactstrap'
import Dogform from '../../components/Dogform'
import Wrapper from '../../components/Wrapper'
import FriendCard from '../../components/FriendCard'

class DogQuestionnaire extends Component { 
    
    constructor(props) { 
        super(props)
        this.state = { 
            dogsex: '',
            doghair: '',
            dogsize: '',
            dogenergy: '',
            doghome: '',
            dogkeymatch: this.dogsize + this.doghome + this.doghair + this.energy,
            petfinderResults: ''
        }

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert('form submitted');
        console.log(this.state);
    }

    handleOptionChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
      };    

    render() { 
       return(
        <div>
          <Container>  
            <Dogform 
                handleOptionChange={this.handleOptionChange} 
                handleSubmit={this.handleSubmit}
                />
            </Container>
            {/* <Wrapper>
            {this.state.petfinderResults.map(friend => (
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
            </Wrapper> */}
        </div>
       );
    }
}

export default DogQuestionnaire;