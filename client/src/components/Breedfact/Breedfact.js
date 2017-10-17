import React from 'react'; 
import {Container, Jumbotron} from 'reactstrap';

const Breedfact = props => { 
    console.log('in breedfact');

    return(
    <div style={{marginTop: 20}}>
    <Container>
        <Jumbotron>
            <h2>BREED NAME: {props.breedName}</h2>
            <p className='lead'>DESCRIPTION: {props.breedDescription}</p>
            <hr /> 
            <p>TEMPERAMENT: {props.breedTemperament}</p>
            <p>HISTORY: {props.breedHistory}</p>
        </Jumbotron>
    </Container>
    </div>
    );
}

export default Breedfact;