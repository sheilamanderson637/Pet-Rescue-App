import react from 'react'; 
import FriendCard from '../FriendCard';


const Results = props => { 
    const petcard = props.petfinderResults.map((searchresult, index) => {
        return(
        <div className='card my-2' key={index}>
            <div> 
                {searchresult}
            </div>
        </div>
        );
    }); 

    
    return ( 
        <div> 
            {props.appResults}
            {searchresults}
        </div>
    );

}