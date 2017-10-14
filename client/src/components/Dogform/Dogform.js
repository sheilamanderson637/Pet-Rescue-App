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
                        onChange={this.handleOptionChange} />{' '}
                        Female
                    </Label>
                    <Label check>
                     <Input type="radio" value="male" name="dog-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'male'} 
                        onChange={this.handleOptionChange} />{' '}
                        Male
                    </Label>
                    <Label check>
                     <Input type="radio" value="any" name="dog-sex" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'any'} 
                        onChange={this.handleOptionChange} />{' '}
                        No Preference
                    </Label>
        </FormGroup>
    
        <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-2">Age</legend>
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


        {/* <div class="row">
            <div class="col-auto">
                <div class="question">
                    <h5>Size</h5>
                </div>
            </div>
        </div>
        <div class="custom-controls-stacked d-block my-3 dogSize-js">
            <label class="col custom-control custom-radio">
                <input type="radio" value="small" name="dog-size" class="custom-control-input" 
                required checked={this.state.selectedOption === 'small'} 
                onChange={this.handleOptionChange}/>
                    <span class="custom-control-indicator"></span>
                        <h6 class="custom-control-description">Small</h6>
            </label>
            <label class="col custom-control custom-radio">
                <input type="radio" value="medium" name="dog-size" class="custom-control-input" 
                required checked={this.state.selectedOption === 'medium'} 
                onChange={this.handleOptionChange}/>
                    <span class="custom-control-indicator"></span>
                        <h6 class="custom-control-description">Medium</h6>
            </label>
            <label class="col custom-control custom-radio">
                <input type="radio" value="large" name="dog-size" class="custom-control-input" 
                required checked={this.state.selectedOption === 'large'} 
                onChange={this.handleOptionChange}/>
                    <span class="custom-control-indicator"></span>
                        <h6 class="custom-control-description">Large</h6>
            </label>
        </div>     

        <div class="row">
            <div class="col-auto">
                <div class="question">
                    <h5>Housing</h5>
                </div>
            </div>
        </div>
            <div class="custom-controls-stacked d-block my-3 dogHome-js">
                <label class="col custom-control custom-radio">
                    <input type="radio" value="home" name="dog-home" class="custom-control-input" 
                    required checked={this.state.selectedOption === 'home'} 
                    onChange={this.handleOptionChange}/>
                        <span class="custom-control-indicator"></span>
                            <h6 class="custom-control-description">House</h6>
                </label>
                <label class="col custom-control custom-radio">
                    <input type="radio" value="apartment" name="dog-home" class="custom-control-input" 
                    required checked={this.state.selectedOption === 'apartment'} 
                    onChange={this.handleOptionChange}/>
                        <span class="custom-control-indicator"></span>
                            <h6 class="custom-control-description">Apartment/Condo</h6>
                </label>
        </div>     
            <div class="row">
                <div class="col-auto">
                    <div class="question">
                        <h5>Shedding</h5>
                    </div>
                </div>
            </div>

        <div class="custom-controls-stacked d-block my-3 dogHair-js">
            <label class="col custom-control custom-radio">
                <input type="radio" value="light" name="dog-hair" class="custom-control-input" 
                required checked={this.state.selectedOption === 'light'} 
                onChange={this.handleOptionChange}/>
                    <span class="custom-control-indicator"></span>
                        <h6 class="custom-control-description">Light</h6>
            </label>
            <label class="col custom-control custom-radio">
                <input type="radio" value="any" name="dog-hair" class="custom-control-input" 
                required checked={this.state.selectedOption === 'any'} 
                onChange={this.handleOptionChange}/>
                    <span class="custom-control-indicator"></span>
                        <h6 class="custom-control-description">No Preference</h6>
            </label>
        </div>
            <div class="row">
                <div class="col-auto">
                    <div class="question">
                        <h5>Energy Level</h5>
                    </div>
                </div>
            </div>
                <div class="custom-controls-stacked d-block my-3 dogEnergy-js">
                    <label class="col custom-control custom-radio">
                        <input type="radio" value="highenergy" name="dog-energy" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'highenergy'} 
                        onChange={this.handleOptionChange}/>
                            <span class="custom-control-indicator"></span>
                                <h6 class="custom-control-description">High</h6>
                    </label>
                    <label class="col custom-control custom-radio">
                        <input type="radio" value="calm" name="dog-energy" class="custom-control-input" 
                        required checked={this.state.selectedOption === 'calm'} 
                        onChange={this.handleOptionChange}/>
                            <span class="custom-control-indicator"></span>
                                <h6 class="custom-control-description">Calm</h6>
                    </label>
            </div>    

<button type="submit" id="submitbtn" class="btn btn-lg btn-warning">Submit</button>                   
 </form> */}

export default Dogform;