import React, { Component } from "react";
import { Container } from 'reactstrap';
import Dogform from '../../components/Dogform';
//import Wrapper from '../../components/Wrapper';
// import FriendCard from '../../components/FriendCard';
import PetfinderAPI from '../../utils/petfinderapi';
import AppAPI from '../../utils/appapi';
import Results from '../../components/Results';
import Breedfact from '../../components/Breedfact';

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
            isBreedfactVisible: false,
            isResultsVisible: false
        }

        this.handleChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();  
        console.log(this.state);
        let matchkey =  this.state.dogsize + this.state.doghome + this.state.doghair + this.state.dogenergy;
        this.setState({dogkeymatch: matchkey});
        // console.log(`Key breed match ${this.state.dogkeymatch}`);
        this.getBreedMatch(matchkey);
    }

    handleOptionChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state);
      }; 

    getBreedMatch(matchkey) { 
        AppAPI.getBreedMatch(matchkey)
            .then((res) => {
                // console.log(res);
                // console.log(`breed name ${res.data[0].breedName}`);
                let breed = res.data[0].breedName 
                this.setState({
                    breedName: res.data[0].breedName,
                    breedDescription: res.data[0].breedDescription,
                    breedHistory: res.data[0].breedHistory,
                    breedTemperament: res.data[0].breedTemperament, 
                });
            
                this.getPetsToRescue(this.state, breed);
                
            }).catch(err => console.log(err));
    }  

    getPetsToRescue(obj, breed) { 
        console.log(obj);
        PetfinderAPI.dogSearch(obj, breed)
        .then((res) => {
            console.log(res.data.petfinder.pets.pet[0]);
            let ispetArr = Array.isArray(res.data.petfinder.pets.pet); 
            let pets = res.data.petfinder.pets.pet;
            this.makePetArray(res.data.petfinder.pets.pet);
            console.log('=== petfinder state ===');
            console.log(this.state.petfinderResults);
            this.setState({isBreedfactVisible: true, isResultsVisible: true});
        }).catch((err) => console.log(err));
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    makePetArray(arr) { 
        console.log(arr);
        console.log(arr[0].age.$t);
        let petArr = [];
        for (var i = 0; i < arr.length; i++) { 
            let newPetObj = { 
                name:arr[i].name.$t,
                age:arr[i].age.$t,
                animal:arr[i].animal.$t,
                address:arr[i].contact.address1.$t,
                city: arr[i].contact.city.$t,
                phone: arr[i].contact.phone.$t,
                state: arr[i].contact.state.$t,
                zip: arr[i].contact.zip.$t,
                email: arr[i].contact.email.$t,
                description: arr[i].description.$t,
                id: arr[i].id.$t,
                age:arr[i].age.$t,
                gender: arr[i].sex.$t
                // img: arr[i].media.photos.photo[0].$t
            }
            
            // need to check if certain object properties are emmpty or undefined
            // https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
            if(this.isEmpty(arr[i].media)) {
                // Object is empty 
                console.log('no image')
                newPetObj.image = 'no image available';

            } else {
                newPetObj.image = arr[i].media.photos.photo[0].$t
            }


            // need to add conditional state to address 2
            // sometimes includes .$t when filled, otherwise empty
            petArr.push(newPetObj);
            console.log(petArr);    
        }
        return this.setState({ petfinderResults: petArr });
    }

    shouldComponentUpdate() { 
        // console.log('component should update if true')
        if (this.state.petfinderResults.length > 0 || this.state.breedName !== '') { 
            // console.log('should update true');
            return true
        } else { 
            // console.log('should update false');
            return false
        }
    } 

    componentWillUpdate() {
        console.log('component will update');
        console.log(this.state);
        
    }

    componentDidupdate() { 
        console.log('component did update');
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
            {!this.state.isBreedfactVisible ? null : 
                <Breedfact 
                    breedName={this.state.breedName}
                    breedDescription={this.state.breedDescription}
                    breedHistory={this.state.breedHistory}
                    breedTemperament={this.state.breedTemperament}  
                />
            }
                <Results 
                    petfinderResults={this.state.petfinderResults}
                />
            </div>    
        </div>
       );
    }
}

export default DogQuestionnaire;


// 


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