import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./saved.css";


class Saved extends React.Component {
  render() {
    return (

      <div className="container">
        <div className="row"> 
        <div className="col-md-12"> 
        <div className="animalName">Pickle</div></div></div>
        <div className="row" >  
            <div className="col-md-8"> 
                
                  <div> <strong>Age: </strong>Adult</div>
                  <div> <strong>Location: </strong>Chicago</div>
                  <div><strong>Address: </strong> 2227 W. Belmont</div>
                  <div><strong>Zip: </strong>60622 </div>
                  <div><strong>Phone: </strong>(773) 913-8100</div><br></br>
                  <div><strong>Description:</strong> YOU MUST MEET PICKLE!!! OMG!! She is an absoluely adorable pocket pittie who only weighs about 40 pounds and is around 4 years old. She's a super sweet typical friendly pit bull mix. She loves to play, ADORES people and takes treats gently. She's lived with children in her previous home and an older large dog. She does pretty well meeting laid back, larger dogs and could live happily with another large dog or as an only dog.She's looking for an adopter who will continue her training and who can  provide her with a loving, stable and consistent home. Pickle has a high prey drive and cannot live with small animals including other small dogs or cats.  Pickle will need a family that understands that she needs time to adjust to her new home.She has a medium energy level and enjoys walks around the neighborhood.She also LOVES to ride in the car and poke her head out the window for some fresh air. In the evenings after her walks with her foster mom, she settles in with a toy and chills out. She has spent a weekend in boarding at a local facility and one with a family with two small children while her foster mom traveled and was given a GREAT report from both! Everyone who meets her loves her and she is seriously even cuter in person.She will do best in a home that can provide her with consistent mid day walks during the work week. Her first training class will be sponsored by a generous donor.</div>

      <Form>

                <FormGroup>
                  <Label for="exampleSubject">Subject</Label>
                  <Input type="subject" name="exampleSubject" id="exampleSubject" placeholder="Pickle" />
                </FormGroup>
                
                <FormGroup>
                  <Label for="exampleText">Your Message</Label>
                  <Input type="textarea" name="text" id="exampleText" placeholder="Message"/>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleNumber">Phone Number</Label>
                  <Input type="number" name="number" id="exampleNumber" placeholder="Phone Number" />
                </FormGroup>

                <Button className="send">Send Message to Shelter</Button>
              </Form>

        </div>
          
        <div className="col-md-4" > 
        <img className="animalPic" src="http://photos.petfinder.com/photos/pets/39037138/1/?bust=1502339834&width=300&-pn.jpg" alt="dog pic" />
      </div>
  </div>
</div>
    );
  }
}
export default Saved;

