import React, { Component } from "react";
import Dogform from '../../components/Dogform'
import Wrapper from '../../components/Wrapper'
import FriendCard from '../../components/FriendCard'

class DogQuestionnaire extends Component { 
    
    constructor(props) { 
        super(props)
        this.state = { 
            selectedOption: ''
        }
    }

    handleOptionChange() { 

    }
    render() { 
       return(
        <Wrapper>
            <Dogform  
                selectedOption={this.state.selectedOption}
                handleOptionChange={this.handleOptionChange} 
                />
            <FriendCard />
        </Wrapper>
       );
    }
}

export default DogQuestionnaire;