import React from 'react'; 
import {Jumbotron, Container} from 'reactstrap';
import FriendCard from '../FriendCard';
import Wrapper from '../../components/Wrapper';


const Results = props => { 
    console.log(props.petfinderResults);
    let petcards;
    if (props.petfinderResults.length > 0) {
        console.log('props array greater than 0');
        petcards = props.petfinderResults.map((petcard) => {
            return(
            <div className='card my-2' key={petcard}>
                <div>
                    <p>New Petcard</p> 
                    {petcard}
                </div>
            </div>
            );
        });

    } else { 
        console.log('props petfinder did not propogate in time');
        petcards = <h3>Uh oh, it appears no pets are available to rescue in the zipcode you submitted.</h3>;
    }
 
    return ( 
        <div style={{marginTop: 20}}>
            {/* <Container>
            <Jumbotron>
                <h2>BREED NAME: {props.breedName}</h2>
                <p className='lead'>DESCRIPTION: {props.breedDescription}</p>
                <hr /> 
                <p>TEMPERAMENT: {props.breedTemperament}</p>
                <p>HISTORY: {props.breedHistory}</p>
            </Jumbotron>
            </Container> */}
            <Wrapper>
            {petcards}
            </Wrapper>
        </div>
    );
}

export default Results;