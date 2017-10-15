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
            doghome: '' 
        }

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault(); 
        console.log(this.state.selectedOption);
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
                dogsex={this.state.dogsex}
                dogsize={this.state.dogsize} 
                selectedOption={this.state}
                handleOptionChange={this.handleOptionChange} 
                submitForm={this.handleSubmit}
                />
            {/* <FriendCard /> */}
            </Container>
        </div>
       );
    }
}

export default DogQuestionnaire;