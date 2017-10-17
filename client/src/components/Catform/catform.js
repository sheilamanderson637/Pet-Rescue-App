import React from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Catform = props => { 
return(
    <div>
        <Form onSubmit={props.handleSubmit}>
            {/* GENDER */}
            <FormGroup>
                <Label htmlFor="catsex">What gender do you prefer for your cat?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='catsex' className="form-control" >
                <option></option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='any'>Any</option>
                </Input>
            </FormGroup>
            {/* AGE */}
            <FormGroup>
                <Label htmlFor="catage">What age cat would you like?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='catage' className="form-control" >
                <option></option>
                <option value='baby'>Baby</option>
                <option value='young'>Young</option>
                <option value='adult'>Adult</option>
                <option value='senior'>Senior</option>
                </Input>
            </FormGroup>
            {/* SIZE */}
            <FormGroup>
                <Label htmlFor="catsize">What size dog do you prefer?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='catsize' className="form-control" >
                <option></option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </Input>
            </FormGroup>
            {/* FRIENDLINESS */}
            <FormGroup>
                <Label htmlFor="catfriendly">Does this cat need to be friendly with other pets?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='catfriendly' className="form-control" >
                <option></option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
                </Input>
            </FormGroup>
            {/* PLAYFUL */}
            <FormGroup>
                <Label htmlFor="catplay">Would you like a playful cat?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='catplay' className="form-control" >
                <option></option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
                </Input>
            </FormGroup>
            {/* ZIP */}
            <FormGroup>
                <Label>Zip:</Label>
                <Input type="text" name="zip" value={props.value} 
                onChange={props.handleOptionChange} />
            </FormGroup>
        <Button onSubmit={() => props.onSubmit} type='submit'>Submit </Button>
        </Form>  
    </div> 
    );
}

export default Catform;