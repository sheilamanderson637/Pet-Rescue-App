import React from "react";
<<<<<<< HEAD
import {Container, FormGroup, Input, Label} from 'reactstrap';

const Catform = props =>

<form onSubmit={this.handleSubmit}>
  
  {/* GENDER   */}
    <Container>
        <Row>
			<Col>
				<p className="text-catform">CAT QUESTIONNAIRE</p>
			</Col>
		</Row>
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Gender</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="female" name="cat-sex" 
                        required checked={this.state.selectedOption === 'female'} 
                        onChange={this.handleOptionChange} />{' '}
                        Female
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="male" name="cat-sex"  
                        required checked={this.state.selectedOption === 'male'} 
                        onChange={this.handleOptionChange} />{' '}
                        Male
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="any" name="cat-sex" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />{' '}
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

 {/* AGE */}
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Age</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="baby" name="cat-age"  
                        required checked={this.state.selectedOption === 'baby'} 
                        onChange={this.handleOptionChange} />{' '}
                        Kitten
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="young" name="cat-age" 
                        required checked={this.state.selectedOption === 'young'} 
                        onChange={this.handleOptionChange} />{' '}
                        Young
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="adult" name="cat-age" 
                        required checked={this.state.selectedOption === 'adult'} 
                        onChange={this.handleOptionChange} />{' '}
                        Adult
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="senior" name="cat-age" 
                        required checked={this.state.selectedOption === 'senior'} 
                        onChange={this.handleOptionChange} />{' '}
                        Senior
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

{/* SIZE */}
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Size</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="small" name="cat-size"  
                        required checked={this.state.selectedOption === 'small'} 
                        onChange={this.handleOptionChange} />{' '}
                        Small
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="medium" name="cat-size"  
                        required checked={this.state.selectedOption === 'medium'} 
                        onChange={this.handleOptionChange} />{' '}
                        Medium
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="large" name="cat-size"  
                        required checked={this.state.selectedOption === 'large'} 
                        onChange={this.handleOptionChange} />{' '}
                        Large
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

{/* FRIENDLY */}
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Friendly with Other Pets</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="yes" name="cat-friendly" 
                        required checked={this.state.selectedOption === 'yes'} 
                        onChange={this.handleOptionChange} />{' '}
                        Yes
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="any" name="cat-friendly" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />{' '}
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

{/* PLAYFUL */}
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Playful</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="yes" name="cat-playful" 
                        required checked={this.state.selectedOption === 'yes'} 
                        onChange={this.handleOptionChange} />{' '}
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="no" name="cat-playful" 
                        required checked={this.state.selectedOption === 'no'} 
                        onChange={this.handleOptionChange} />{' '}
                        No 
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

        <button type="submit" id="submitbtn" class="btn btn-lg btn-warning">Submit</button>                   
    </Container>
</form>
 
=======
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
                <Label htmlFor="catsize">What size cat do you prefer?</Label>
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

>>>>>>> master
export default Catform;