const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING USERS' SAVED PETS FROM THE PET FINDER API
const PetSchema = new Schema({
  //petType: record user's pet type selection
  petType: String,
  //petId: corresponds to response.petfinder.pets.pet[i].id.$t
  petId: String,
  //name: corresponds to response.petfinder.pets.pet[i].name.$t
  name: String,
  //age: corresponds to response.petfinder.pets.pet[i].age.$t
  age: String,
  //city: corresponds to response.petfinder.pets.pet[i].contact.city.$t
  city: String,
  //email: corresponds to response.petfinder.pets.pet[i].contact.email.$t
  email: String,
  //sex: corresponds to response.petfinder.pets.pet[i].sex.$t
  sex: String,
  //size: corresponds to response.petfinder.pets.pet[i].size.$t
  size: String,
  //description: corresponds to response.petfinder.pets.pet[i].description.$t
  description: String,
  //image: corresponds to response.petfinder.pets.pet[i].media.photos.photo[3].$t
  image: String,
  //dateSaved: record the date when user presses save button
  dateSaved: { 
    type: Date, 
    default: Date.now 
  }  
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

//CODE SNIPPET FROM PROJECT SHOWING DATA OBTAINED FROM PETFINDER API CALL
// console.log(response.petfinder) 
// for (i = 1; i < 10; i++) {
//     document.getElementById("images" +i).src = response.petfinder.pets.pet[i].media.photos.photo[3].$t;

///     $(".name" +i).html(response.petfinder.pets.pet[i].name.$t );
//     $(".age" +i).html("Age: " + response.petfinder.pets.pet[i].age.$t);
//     $(".city" +i).html("City: " + response.petfinder.pets.pet[i].contact.city.$t);
//     $(".contact" +i).html("Contact: " + response.petfinder.pets.pet[i].contact.email.$t );
//     $(".sex" +i).html("Sex: " + response.petfinder.pets.pet[i].sex.$t);
//     $(".size" +i).html("Size: " + response.petfinder.pets.pet[i].size.$t );

//     var details = document.querySelector('.description' +i);
//     details.setAttribute('data-balloon', response.petfinder.pets.pet[i].description.$t);
// };