import React, { Component } from "react";
import { Container } from 'reactstrap';
import Catform from '../../components/Catform';
// import Wrapper from '../../components/Wrapper';
// import FriendCard from '../../components/FriendCard';
import PetfinderAPI from '../../utils/petfinderapi';
import AppAPI from '../../utils/appapi';
import Results from '../../components/Results';

class CatQuestionnaire extends Component { 
    
    constructor(props) { 
        super(props)
        this.state = { 
            catsex: '',
            catage: '',
            catsize: '',
            catfriendly: '',
            catplay: '',
            catkeymatch: '',
            zip:'',
            petfinderResults: [],
            appResults: ''           
        }

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.state);
        let matchkey =  this.state.catsize + this.state.catfriendly + this.state.catplay + this.state.dogenergy;
        this.setState({catkeymatch: matchkey});
        console.log(`Key breed match ${this.state.catkeymatch}`);
        this.getBreedMatch(matchkey);
    }

    handleOptionChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
      }; 
    
    getBreedMatch(matchkey) { 
        AppAPI.getBreedMatch(matchkey)
            .then((res) => {
                console.log(res);
                console.log(`breed name ${res.data[0].breedName}`);
                let breed = res.data[0].breedName 
                this.getPetsToRescue(this.state, breed);
                // this.setState({ appResults: res.data[0] })
            }).catch(err => console.log(err));
    }  

    getPetsToRescue(obj, breed) { 
        console.log(obj);
        PetfinderAPI.dogSearch(obj, breed)
        .then((res) => {
            console.log(res);
            console.log(res.data.petfinder.pets.pet)
        }).catch((err) => console.log(err));
    }

    render() { 
       return(
        <div>
          <Container>  
            <Catform 
                handleOptionChange={this.handleOptionChange} 
                handleSubmit={this.handleSubmit}
                />
            </Container>
            <div>
                <Results 
                    appResults={this.state.appResults}
                    petfinderResults={this.state.petfinderResults}
                />
            </div>
        </div>
       );
    }
}

export default CatQuestionnaire;

// {this.state.petfinderResults.map(friend => (
//     <FriendCard
        
//         id={friend.id}
//         key={friend.id}
//         name={friend.name}
//         image={friend.image}
//         gender={friend.gender}
//         location={friend.location}
//         age={friend.age}
//         size={friend.size}
//         description={friend.description}
//         address={friend.address}
//         zip={friend.zip}
//         details={friend}
//         phone={friend.phone}
//         email={friend.email}
//     />
//     ))}