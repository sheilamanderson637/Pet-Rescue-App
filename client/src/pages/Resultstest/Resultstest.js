import React, {Component} from 'react';

import {Button, Row, Container, Col, Jumbotrong} from 'reactstrap';
import FriendCard from '../../components/FriendCard';
import Wrapper from '../../components/Wrapper';
import friends from '../../friends.json';
import PetfinderAPI from '../../utils';

class Resultstest extends Component { 

    state = { 
        friends: friends,
        PFresults: '', 
        testObj: { 
            age: 'young',
            sex: 'male',
            size: 'small', 
            zip: '60089',
            animaltype: 'dog',
            breed: 'pug'
          }
    }

    function getPetsToRescue (obj) { 
        console.log(obj)
        Petfinder(obj)
            .then((res) => { 
                state.PFresults = res.data.petfinder.pets.pet;
                conole.loge(state.PFresults);
            }).catch((err) => { console.log(err); }); 
    }

    render() { 
        getPetsToRescue(state.testObj);
        return(
            <div>
                <Wrapper>
                    {state.PFresults.map(friend => ( 
                        <FriendCard
                        id={friend.id.$t}
                        key={friend.id.$t}
                        name={friend.name.$t}
                        image={friend.media.photos.photo[0].$t}
                        gender={friend.sex.$t}
                        location={friend.contact.city.$t}
                        age={friend.age.$t}
                        size={friend.size.$t}
                        description={friend.description.$t}
                        address={friend.contact.address1.$t}
                        zip={friend.contact.zip.$t}
                        details={friend}
                        phone={friend.contact.phone.$t}
                        email={friend.contact.email.$t}
                        />
                    ))};
                </Wrapper>
            </div> 
        );
    }
}

exports default Resultstest;