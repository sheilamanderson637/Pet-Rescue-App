import React from 'react'; 
import {Container, Jumbotron, Card} from 'reactstrap';
import "./Breedfact.css";


const Breedfact = props => { 
    console.log('in breedfact');

    return(
    <div style={{marginTop: 20}}>
    <Container>
        <Jumbotron className="breedBox">
            <h2 className="breedName">{props.breedName}</h2>
            <p className='lead'>Description: {props.breedDescription}</p>
            <hr /> 
            <p>Temperament: {props.breedTemperament}</p>
            <p>History: {props.breedHistory}</p>
        </Jumbotron>
    </Container>
    </div>
    );
}

export default Breedfact;