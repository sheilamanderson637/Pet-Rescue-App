import React from "react";
import {FormGroup, Label, Input, Col} from 'reactstrap';

const Dogform = props =>

<form>
  
  {/* GENDER   */}
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Gender</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value={props.dogsex} name="dogsex" 
                        required checked
                        onChange={props.handleOptionChange} />{' '}
                        Female
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value={props.dogsex}  name="dogsex"
                        required checked 
                        onChange={props.handleOptionChange} />{' '}
                        Male
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value={props.dogsex} name="dogsex"
                        required checked
                        onChange={props.handleOptionChange} />{' '}
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>

 {/* AGE */}
        {/* <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Age</legend>
                <Col sm={10}>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" value="puppy" name="dog-age"
                        required checked={props.selectedOption === 'puppy'} 
                        onChange={props.handleOptionChange} />{' '}
                        Puppy
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label check>
                    <Input type="radio" value="young" name="dog-age"
                        required checked={props.selectedOption === 'young'} 
                        onChange={props.handleOptionChange} />{' '}
                        Young
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label check>
                    <Input type="radio" value="adult" name="dog-age"
                        required checked={props.selectedOption === 'adult'} 
                        onChange={props.handleOptionChange} />{' '}
                        Adult
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label check>
                    <Input type="radio" value="senior" name="dog-age"
                        required checked={props.selectedOption === 'senior'} 
                        onChange={props.handleOptionChange} />{' '}
                        Senior
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup> */}

{/* SIZE */}
        {/* <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Size</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="small" name="dog-size"
                        required checked={props.selectedOption === 'small'} 
                        onChange={props.handleOptionChange} />{' '}
                        Small
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="medium" name="dog-size"
                        required checked={props.selectedOption === 'medium'} 
                        onChange={props.handleOptionChange} />{' '}
                        Medium
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="large" name="dog-size"
                        required checked={props.selectedOption === 'large'} 
                        onChange={props.handleOptionChange} />{' '}
                        Large
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup> */}

{/* HOUSING */}
        {/* <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Housing</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="home" name="dog-home"
                        required checked={props.selectedOption === 'home'} 
                        onChange={props.handleOptionChange} />{' '}
                        Home
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="apartment" name="dog-home"
                        required checked={props.selectedOption === 'apartment'} 
                        onChange={props.handleOptionChange} />{' '}
                        Apartment/Condo
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup> */}

{/* SHEDDING */}
        {/* <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Shedding</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="light" name="dog-hair"
                        required checked={props.selectedOption === 'light'} 
                        onChange={props.handleOptionChange} />{' '}
                        Light
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="any" name="dog-hair"
                        required checked={props.selectedOption === 'any'} 
                        onChange={props.handleOptionChange} />{' '}
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup> */}

{/* ENERGY */}
        {/* <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Energy Level</legend>
                <Col sm={10}>
                 <FormGroup check>
                    <Label check>
                     <Input type="radio" value="highenergy" name="dog-energy"
                        required checked={props.selectedOption === 'highenergy'} 
                        onChange={props.handleOptionChange} />{' '}
                        High
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                     <Input type="radio" value="calm" name="dog-energy"
                        required checked={props.selectedOption === 'calm'} 
                        onChange={props.handleOptionChange} />{' '}
                        Calm
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup> */}

    <button type="submit" id="submitbtn" className="btn btn-lg btn-warning" onSubmit={props.handleSubmit}>Submit</button>                   
</form>

export default Dogform;