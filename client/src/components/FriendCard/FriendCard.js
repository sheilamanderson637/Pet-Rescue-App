import React from "react";
import "./FriendCard.css";
import Details from "./modal";

const FriendCard = props => (
  <div className="card">
    
    <div className="img-container">

      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
     
        <div className="animalName"><strong>{props.name}</strong></div>
        <div><strong>Location:</strong> {props.location}</div>    
        <div><strong>Age:</strong> {props.age}</div>
        <div><strong>Gender:</strong> {props.gender}</div>  
        <div><strong>Size:</strong> {props.size}</div>
      
        <div className="details"> <Details details={props.details}></Details></div>

    </div>
  </div>

);


/*
const FriendCard = props => (


<div class="row">
    <img alt={props.name} src={props.image} />

 <div class="col-sm-12 col-md-12 col-xs-12">
<div class="card" style="">
  <div class="card-block">
    <center><h1 class="dogName"></h1></center>
   
  <ul class="list-group list-group-flush">
            <div class="breedInfo">
            <div class="dogInfo" class="divst-group-item">Name:{props.name}</div>
            <div class="dogHistory" class="list-group-item"> <strong>Occupation:</strong> {props.occupation}</div>
            <div class="" class="list-group-item"></div>   
            </div>
          </ul>
          <div class="card-block">
            <div class="" class="list-group-item"></div>
            <div class="" class="list-group-item"></div>
            <div class="" class="divst-group-item"></div>
          </div>
        </div>
        </div>
</div>
</div>

);
*/
export default FriendCard;
