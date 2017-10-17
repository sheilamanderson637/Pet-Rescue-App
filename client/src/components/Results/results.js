import React from 'react'; 
import FriendCard from '../FriendCard';


const Results = props => { 
    const petcards = props.petfinderResults.map((petcard, index) => {
        return(
        <div className='card my-2' key={index}>
            <div> 
                {petcard}
            </div>
        </div>
        );
    }); 
    return ( 
        <div>
            <h3>Rresults go here</h3> 
            {props.appResults}
            {petcards}
            
        </div>
    );

}

export default Results;