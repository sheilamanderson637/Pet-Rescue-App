import React, { Component } from "react";
import { Container } from 'reactstrap';
import Dogform from '../../components/Dogform';
import Wrapper from '../../components/Wrapper';
import FriendCard from '../../components/FriendCard';
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
            zip:'',
            petfinderResults: '',
            appResults: ''           
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
                console.log(res);
                console.log(`breed name ${res.data[0].breedName}`);
                let breed = res.data[0].breedName 
                this.getPetsToRescue(this.state, breed);
                this.setState({ appResults: res.data[0] })
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

       
        const searchresults = props.searchresults.map((searchresult) => {
            return(
            <div className='card my-2' key={searchresult._id}>
                <div className='card-body' >
                    <h2 className="headline">{searchresult.headline.main}</h2>
                    <p className="summary">{searchresult.snippet}</p>
                    <p><a className="articleURL" href={searchresult.web_url} target="_blank">{searchresult.web_url}</a></p>
                    <Savebutton onClick={props.savearticle}>Save Article</Savebutton>
                </div>
            </div>
            );
        });
     

       return(
        <div>
          <Container>  
            <Dogform 
                handleOptionChange={this.handleOptionChange} 
                handleSubmit={this.handleSubmit}
                />
            </Container>
            <Wrapper>
                <Results 
                    appResults={this.state.appResults}
                    petfinderResults={this.state.petfinderResults}
                />
            </Wrapper>
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