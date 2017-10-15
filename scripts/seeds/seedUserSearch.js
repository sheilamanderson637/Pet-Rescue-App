const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/petrescuers",
    {
      useMongoClient: true
    }
  );

const newSearch = [
    {
        petType: 'dog',
        preferences: [
            {
                questionId: 'dogAge',
                userChoice: 'baby'
            },
            {
                questionId: 'dogEnergy',
                userChoice: 'calm'
            },
            {
                questionId: 'dogHair',
                userChoice: 'light'
            },  
            {
                questionId: 'dogHome',
                userChoice: 'apartment'
            },
            {
                questionId: 'dogSex',
                userChoice: 'female'
            }, 
            {
                questionId: 'dogSize',
                userChoice: 'small'
            },          

        ],
    },
];

db.UserSearch
.remove({})
.then(() => db.UserSearch.collection.insertMany(newSearch))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});