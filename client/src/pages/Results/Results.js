import React, {Component} from 'react'; 
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Handler from '../../components/Questionnairehandler';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json'

const Results = (props) => { 
//    state = { 
//         friends
//     };

    return ( 
        <div>
            <Container>
            <Jumbotron>
            <h1>Aren't they all cute.</h1>
            <p className="lead">Please give one a good home.</p>
            </Jumbotron>
                <Handler> 
        `         <Wrapper>
                    <FriendCard/>
                    {/* {this.state.friends.map(friend => (
                    <FriendCard
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        gender={friend.gender}
                        location={friend.location}
                        age={friend.age}
                        size={friend.size}
                        description={friend.description}
                        address={friend.address}
                        zip={friend.zip}
                        details={friend}
                        phone={friend.phone}
                        email={friend.email}
                    />
                    ))} */}
                </Wrapper>
            </Handler>
            </Container>  
        </div>
    );
}

export default Results;