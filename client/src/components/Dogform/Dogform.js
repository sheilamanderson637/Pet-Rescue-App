import React from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "./Dogform.css";

const Dogform = props => { 
return(
    <div className="div">
        <Form onSubmit={props.handleSubmit}>
            {/* GENDER */}
            <FormGroup>
                <Label htmlFor="dogsex">What gender do you prefer for your dog?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogsex' className="form-control" >
                <option></option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='any'>Any</option>
                </Input>
            </FormGroup>
            {/* AGE */}
            <FormGroup>
                <Label htmlFor="dogage">What age dog would you like?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogage' className="form-control" >
                <option></option>
                <option value='baby'>Puppy</option>
                <option value='young'>Young</option>
                <option value='adult'>Adult</option>
                <option value='senior'>Senior</option>
                </Input>
            </FormGroup>
            {/* SIZE */}
            <FormGroup>
                <Label htmlFor="dogsize">What size dog do you prefer?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogsize' className="form-control" >
                <option></option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </Input>
            </FormGroup>
            {/* HOUSING */}
            <FormGroup>
                <Label htmlFor="doghome">Where will your dog live?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='doghome' className="form-control" >
                <option></option>
                <option value='home'>House with a yard</option>
                <option value='apartment'>Apartment/Condo</option>
                </Input>
            </FormGroup>
            {/* SHEDDING */}
            <FormGroup>
                <Label htmlFor="doghair">Are you looking for a dog that is a light shedder or would you love any dog regardless?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='doghair' className="form-control" >
                <option></option>
                <option value='light'>Light Shedder</option>
                <option value='any'>No Preference</option>
                </Input>
            </FormGroup>
            {/* ENERGY */}
            <FormGroup>
                <Label htmlFor="dogenergy">Do you want an energetic dog to play fetch with or would you like a calm dog to snuggle with on the sofa?</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogenergy' className="form-control" >
                <option></option>
                <option className='option' value='highenergy'>Energetic</option>
                <option className='option' value='calm'>Calm</option>
                </Input>
            </FormGroup>
            {/* ZIP */}
            <FormGroup>
                <Label>Please provide your home zip code to search for available dogs in your area.</Label>
                <Input type="text" name="zip" value={props.value} 
                onChange={props.handleOptionChange} />
            </FormGroup>
        <Button className='button' onSubmit={() => props.onSubmit} color='warning' type='submit'>Submit </Button>
        </Form>  
    </div> 
    );
}

export default Dogform;

{/* <div>
<form onSubmit={props.handleSubmit}>
<div className="form-group">
    <label htmlFor="dogsex">Dog Sex</label>
    <select value={props.value} onChange={props.handleOptionChange} name='dogsex' className="form-control" >
    <option value='male'>Male</option>
    <option value='female'>Female</option>
    <option value='any'>Any</option>
    </select>
</div>
    <button onSubmit={() => props.onSubmit} type='submit'>Submit </button>
</form>  
</div>  */}
