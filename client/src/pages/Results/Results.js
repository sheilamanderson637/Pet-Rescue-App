import react from 'react'; 
import { Button, Row, Container, Col, Jumbotron } from 'reactstrap';
import FriendCard from '../../components/FriendCard'
import Handler from '../../components/Questionnairehandler'

class Results extends Component { 
    constuctor(props) { 
        super(props);
        this.state = {
            results = []
        }  
    }


    render() { 
        return ( 
            <div>
                <Container>
                <Jumbotron>
                <h1>Aren't they all cute.</h1>
                <p className="lead">Please give one a good home.</p>
                </Jumbotron>
                    <Handler> 
                    <FriendCard state={this.state.results} />
                    </Handler>
                </Container>  
            </div>
        );
    }


}

export default Results;