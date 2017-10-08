//This file seeds the database with questionnaires for different pet types using the Questionnaire model, 
//which could help for scaling the app in the future to include more pet types.

const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

//This file seeds the database

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petrescuers",
  {
    useMongoClient: true
  }
);

const questionnaireSeed = [
  // THIS IS THE DOG QUESTIONNAIRE
  {
    petType: 'dog',
    items: [
      {
        question: 'What gender do you prefer for your dog?',
        answers: ['Female', 'Male', 'Any']
      },
      {
        question: 'What age dog would you like?',
        answers: ['Puppy', 'Young', 'Adult', 'Senior']
      },
      {
        question: 'What size dog would you like?',
        answers: ['Small', 'Medium', 'Large']
      },
      {
        question: 'Will your dog live in a house with a yard or an apartment/condo?',
        answers: ['House', 'Apartment/Condo']
      },
      {
        question: 'Are you looking for a dog that is a light shedder or would you love any dog regardless?',
        answers: ['Light', 'Any']
      },
      {
        question: 'Do you want an energetic dog to play fetch with or would you like a calm dog to snuggle with on the sofa?',
        answers: ['Energetic', 'Calm']
      },
    ],
  },

  // THIS IS THE CAT QUESTIONNAIRE
  {
    petType: 'cat',
    items: [
      {
        question: 'What gender do you prefer for your cat?',
        answers: ['Female', 'Male', 'Any']
      },
      {
        question: 'What age cat would you like?',
        answers: ['Baby', 'Young', 'Adult', 'Senior']
      },
      {
        question: 'What size dog would you like?',
        answers: ['Small', 'Medium', 'Large']
      },
      {
        question: 'Does this cat need to be friendly with other pets?',
        answers: ['Yes', 'No']
      },
      {
        question: 'Would you like a playful cat?',
        answers: ['Yes', 'No']
      },
    ],
  }   
];

db.Questionnaire
.remove({})
.then(() => db.Questionnaire.collection.insertMany(questionnaireSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
  