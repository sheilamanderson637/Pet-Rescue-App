import React from "react";
import {FormGroup, Label, Input} from 'reactstrap';

const Catform = props =>

<form onSubmit={this.handleSubmit}>
        
    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Gender</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="female" name="cat-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'female'} 
                        onChange={this.handleOptionChange} />
                        Female
                    </Label>
                    <Label check>
                     <Input type="radio" value="male" name="cat-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'male'} 
                        onChange={this.handleOptionChange} />
                        Male
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="cat-sex" class="custom-control-input" 
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
                     <Input type="radio" value="kitten" name="cat-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'kitten'} 
                        onChange={this.handleOptionChange} />
                        Kitten
                    </Label>
                    <Label check>
                     <Input type="radio" value="young" name="cat-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'young'} 
                        onChange={this.handleOptionChange} />
                        Young
                    </Label>
                    <Label check>
                     <Input type="radio" value="adult" name="cat-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'adult'} 
                        onChange={this.handleOptionChange} />
                        Adult
                    </Label>
                    <Label check>
                     <Input type="radio" value="senior" name="cat-age" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'senior'} 
                        onChange={this.handleOptionChange} />
                        Senior
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>

    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Size</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="small" name="cat-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'small'} 
                        onChange={this.handleOptionChange} />
                        Small
                    </Label>
                    <Label check>
                     <Input type="radio" value="medium" name="cat-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'medium'} 
                        onChange={this.handleOptionChange} />
                        Medium
                    </Label>
                    <Label check>
                     <Input type="radio" value="large" name="cat-size" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'large'} 
                        onChange={this.handleOptionChange} />
                        Large
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>

    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Friendly with other pets</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="friendly" name="cat-friendly" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'friendly'} 
                        onChange={this.handleOptionChange} />
                        Friendly
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="cat-friendly" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />
                        No Preference
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>
            
    <FormGroup tag="fieldset" row>
        <legend className="col-form-legend col-sm-2">Playful</legend>
            <Col sm={10}>
                <FormGroup check>
                    <Label check>
                     <Input type="radio" value="playful" name="cat-playful" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'playful'} 
                        onChange={this.handleOptionChange} />
                        Yes
                    </Label>
                    <Label check>
                     <Input type="radio" value="calm" name="cat-playful" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'calm'} 
                        onChange={this.handleOptionChange} />
                        No
                    </Label>
                </FormGroup>
            </Col>
    </FormGroup>         
            
<button type="submit" id="submitbtn" class="btn btn-lg btn-warning">Submit</button> 
                 
</form>

export default Catform;