const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/petrescuers",
    {
      useMongoClient: true
    }
  );

const savedPet = [
    {
        //petType: record user's pet type selection
        petType: 'dog',
        //petId: corresponds to response.petfinder.pets.pet[i].id.$t
        petId: '39540887',
        //name: corresponds to response.petfinder.pets.pet[i].name.$t
        name: 'Pumpkin',
        //age: corresponds to response.petfinder.pets.pet[i].age.$t
        age: 'Baby',
        //city: corresponds to response.petfinder.pets.pet[i].contact.city.$t
        city: 'Manhattan',
        //email: corresponds to response.petfinder.pets.pet[i].contact.email.$t
        email: 'Info@ForgetMeNotRescue.com',
        //sex: corresponds to response.petfinder.pets.pet[i].sex.$t
        sex: 'F',
        //size: corresponds to response.petfinder.pets.pet[i].size.$t
        size: 'S',
        //description: corresponds to response.petfinder.pets.pet[i].description.$t
        description: 'Hi I am Pumpkin. I am so sweet and tiny. I am absolutely adorable. I love to cuddle and give kisses. I am good with other dogs. I do use pee pads.  I get along with kids as well.',
        //image: corresponds to response.petfinder.pets.pet[i].media.photos.photo[3].$t
        image: 'http://photos.petfinder.com/photos/pets/39540887/1/?bust=1506918098&width=300&-pn.jpg',
    },
];

db.Pet
.remove({})
.then(() => db.Pet.collection.insertMany(savedPet))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});