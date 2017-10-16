import React from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Dogform = props => { 
return(
    <div>
        <Form onSubmit={props.handleSubmit}>
            {/* GENDER */}
            <FormGroup>
                <Label htmlFor="dogsex">Dog Sex</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogsex' className="form-control" >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='any'>Any</option>
                </Input>
            </FormGroup>
            {/* AGE */}
            <FormGroup>
                <Label htmlFor="dogage">Dog Age</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogage' className="form-control" >
                <option value='puppy'>Puppy</option>
                <option value='young'>Young</option>
                <option value='adult'>Adult</option>
                <option value='senior'>Senior</option>
                </Input>
            </FormGroup>
            {/* SIZE */}
            <FormGroup>
                <Label htmlFor="dogsize">Dog Size</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogsize' className="form-control" >
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </Input>
            </FormGroup>
            {/* HOUSING */}
            <FormGroup>
                <Label htmlFor="doghome">Dog Home</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='doghome' className="form-control" >
                <option value='home'>Home</option>
                <option value='apartment'>Apartment/Condo</option>
                </Input>
            </FormGroup>
            {/* SHEDDING */}
            <FormGroup>
                <Label htmlFor="doghair">Dog Shedding</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='doghair' className="form-control" >
                <option value='light'>Light</option>
                <option value='any'>No Preference</option>
                </Input>
            </FormGroup>
            {/* ENERGY */}
            <FormGroup>
                <Label htmlFor="dogenergy">Dog Energy</Label>
                <Input type='select' value={props.value} onChange={props.handleOptionChange} name='dogenergy' className="form-control" >
                <option value='high'>High</option>
                <option value='calm'>Calm</option>
                </Input>
            </FormGroup>
        <Button onSubmit={() => props.onSubmit} type='submit'>Submit </Button>
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
