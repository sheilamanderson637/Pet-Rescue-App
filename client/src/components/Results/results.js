import React from 'react'; 
import FriendCard from '../FriendCard';
import Wrapper from '../../components/Wrapper';


const Results = props => { 
    console.log(props.petfinderResults);
    let petcards;
    if (props.petfinderResults.length > 0) {
        petcards = props.petfinderResults[0].name;
        console.log(petcards);
    }

        petcards = props.petfinderResults.map((petcard) => {
            return(
            <div className='card my-2' key={petcard.id.$t}>
                <div>
                    <p>New Petcard</p> 
                    <p>{petcard.description}</p>
                </div>
            </div>
            );
        });

    // } else { 
    //     console.log('props petfinder did not propogate in time');
    //     petcards = <h3>Uh oh, it appears no pets are available to rescue in the zipcode you submitted.</h3>;
    // }
 
    return ( 
        <div style={{marginTop: 20}}>
            <Wrapper>
            {petcards}
            </Wrapper>
        </div>
    );
}

export default Results;