import React from "react";
import {FormGroup, Label, Input} from 'reactstrap';

const Dogform = props =>

<form onSubmit={this.handleSubmit}>
        
    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Gender</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="female" name="dog-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'female'} 
                        onChange={this.handleOptionChange} />
                        Female
                    </Label>
                    <Label check>
                     <Input type="radio" value="male" name="dog-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'male'} 
                        onChange={this.handleOptionChange} />
                        Male
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="dog-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>
    
    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Age</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="puppy" name="dog-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'puppy'} 
                        onChange={this.handleOptionChange} />
                        Puppy
                    </Label>
                    <Label check>
                     <Input type="radio" value="young" name="dog-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'young'} 
                        onChange={this.handleOptionChange} />
                        Young
                    </Label>
                    <Label check>
                     <Input type="radio" value="adult" name="dog-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'adult'} 
                        onChange={this.handleOptionChange} />
                        Adult
                    </Label>
                    <Label check>
                     <Input type="radio" value="senior" name="dog-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'senior'} 
                        onChange={this.handleOptionChange} />{' '}
                        Senior
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="dog-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>

    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Size</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="small" name="dog-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'small'} 
                        onChange={this.handleOptionChange} />
                        Small
                    </Label>
                    <Label check>
                     <Input type="radio" value="medium" name="dog-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'medium'} 
                        onChange={this.handleOptionChange} />
                        Medium
                    </Label>
                    <Label check>
                     <Input type="radio" value="large" name="dog-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'large'} 
                        onChange={this.handleOptionChange} />
                        Large
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>

    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Housing</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="home" name="dog-home" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'home'} 
                        onChange={this.handleOptionChange} />
                        Home
                    </Label>
                    <Label check>
                     <Input type="radio" value="apartment" name="dog-home" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'apartment'} 
                        onChange={this.handleOptionChange} />
                        Apartment/Condo
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>

    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Shedding</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="light" name="dog-hair" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'light'} 
                        onChange={this.handleOptionChange} />
                        Light
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="dog-hair" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />
                        Any
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
            
    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Energy Level</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="highenergy" name="dog-energy" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'highenergy'} 
                        onChange={this.handleOptionChange} />
                        High
                    </Label>
                    <Label check>
                     <Input type="radio" value="calm" name="dog-energy" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'calm'} 
                        onChange={this.handleOptionChange} />
                        Calm
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>         
            
<button type="submit" id="submitbtn" class="btn btn-lg btn-warning">Submit</button> 
                 
</form>

export default Dogform;