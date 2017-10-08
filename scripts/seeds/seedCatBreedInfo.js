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

const catBreedInfo = [
  {
    animalType: 'cat',
    breedName: 'American Shorthair',
    breedFacts: [
      {
        //breedDescription: obj.queryresult.pods[4].subpods[0].plaintext,  
        item: 'Description',
        description: 'Considered medium in size, proportions, musculature, and boning\nCoat is short, hard, smooth, dense, and requires almost no grooming\nAdapts to a wide range of living situations\nMatures fully at around three or four years of age',
      },
      {
        //breedTemperment: obj.queryresult.pods[5].subpods[0].plaintext,
        item: 'Temperament',
        description: 'active  |  curious  |  gentle  |  intelligent  |  playful  |  tolerant'
      },
      {
        // breedCharacteristics (properties): obj.queryresult.pods[2].subpods[0].plaintext,  
        item: 'Characteristics',
        description: 'size | medium  |  large\nweight | (8 to 15) lb  (pounds)\nhair length | short\ngrooming | moderate\norigin | United States'
      },
      {
        // breedHistory: String, //obj.queryresult.pods[6].subpods[0].plaintext  
        item: 'History',
        description: 'Developed from cats used to catch mice on ships carrying European settlers to North America\nSelective breeding in the United States in the early 20th century emphasized the desirable characteristics of the breed'
      }
    ]
  }
];

db.BreedInfo
.remove({})
.then(() => db.BreedInfo.collection.insertMany(catBreedInfo))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});