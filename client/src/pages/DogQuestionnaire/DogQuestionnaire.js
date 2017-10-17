import React, { Component } from "react";
import { Container } from 'reactstrap';
import Dogform from '../../components/Dogform';
//import Wrapper from '../../components/Wrapper';
// import FriendCard from '../../components/FriendCard';
import PetfinderAPI from '../../utils/petfinderapi';
import AppAPI from '../../utils/appapi';
import Results from '../../components/Results';

class DogQuestionnaire extends Component { 
    
    constructor(props) { 
        super(props)
        this.state = { 
            dogsex: '',
            doghair: '',
            dogsize: '',
            dogenergy: '',
            doghome: '',
            dogkeymatch: '',
            zip: '',
            breedName: '',
            breedDescription: '',
            breedHistory: '',
            breedTemperament: '',           
            petfinderResults: [], 
            isVisible: false
        }

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.state);
        let matchkey =  this.state.dogsize + this.state.doghome + this.state.doghair + this.state.dogenergy;
        this.setState({dogkeymatch: matchkey});
        console.log(`Key breed match ${this.state.dogkeymatch}`);
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
                // console.log(res);
                // console.log(`breed name ${res.data[0].breedName}`);
                this.setState({
                    breedName: res.data[0].breedName,
                    breedDescription: res.data[0].breedDescription,
                    breedHistory: res.data[0].breedHistory,
                    breedTemperament: res.data[0].breedTemperament  
                });
                let breed = res.data[0].breedName 
                this.getPetsToRescue(this.state, breed);
                // this.setState({ appResults: res.data[0] })
            }).catch(err => console.log(err));
    }  

    getPetsToRescue(obj, breed) { 
        console.log(obj);
        PetfinderAPI.dogSearch(obj, breed)
        .then((res) => {
            console.log(res.data.petfinder.pets.pet)
            this.setState({petfinderResults: res.data.petfinder.pets})
            console.log('=== petfinder state ===');
            console.log(this.state.petfinderResults);
            this.setState({isVisible: true});
        }).catch((err) => console.log(err));
    }

    
    shouldComponentUpdate() { 
        console.log('component should update if true')
        if (this.state.petfinderResults.length > 0) { 
            console.log('should update true');
            return true
        } else { 
            console.log('should update false');
            return false
        }
    } 

    componentWillUpdate() {
        console.log('component will update');
    }


    render() { 
       return(
        <div>
          <Container>  
            <Dogform 
                handleOptionChange={this.handleOptionChange} 
                handleSubmit={this.handleSubmit}
                />
            </Container>
            <div> 
                {!this.state.isVisible ? null : 
                <Results 
                    breedName={this.state.breedName}
                    breedDescription={this.state.breedDescription}
                    breedHistory={this.state.breedHistory}
                    breedTemperament={this.state.breedTemperament}  
                    petfinderResults={this.state.petfinderResults}
                />
                }
            </div>
        </div>
       );
    }
}

export default DogQuestionnaire;

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