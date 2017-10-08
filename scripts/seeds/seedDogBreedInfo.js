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
    
const dogBreedInfo = [
  {
    animalType: 'dog',
    breedName: 'Shih Tzu',
    breedFacts: [
      {
        //breedDescription: obj.queryresult.pods[4].subpods[0].plaintext,  
        item: 'Description',
        description: 'Small and compact companion dog\nCoat is silky and profuse, with a long outer layer\nUpward-growing hair on its nasal bridge, plus its beard and mustache, give it a \"chrysanthemum\" look\nHead is round, with a short and square muzzle\nLarge hanging ears have long straight hair that reaches past its shoulders\nCarries its long tail over its back, level with the top of its head\nCoat colors can be solid, or combinations such as white and brown, gold with black mask, or brindle'
      }
      {
        //breedTemperment: obj.queryresult.pods[5].subpods[0].plaintext,
        item: 'Temperament',
        description: 'active  |  affectionate  |  alert  |  cheerful  |  friendly  |  gentle  |  hardy  |  lively  |  loyal  |  quiet  |  serious  |  tough'
      }
      {
        // breedCharacteristics (properties): obj.queryresult.pods[2].subpods[0].plaintext,  
        item: 'Characteristics',
        description: 'female height | (7.98 to 11) inches\nmale height | (7.98 to 11) inches\nfemale weight | (8.98 to 16) lb  (pounds)\nmale weight | (8.98 to 16) lb  (pounds)\nsize | toy  |  small\nlife span | (12 to 18) years\nlitter size | (1 to 5)\nhair length | long\nshedding | light\nAKC recognition year | 1969  (48 years ago)\nUKC recognition year | 1966  (51 years ago)\norigin | China'
      }
      {
        // breedHistory: String, //obj.queryresult.pods[6].subpods[0].plaintext  
        item: 'History',
        description: 'Ancient breed originating in Tibet\nGiven as gifts to Chinese emperors during the 17th century\nName means \"lion dog\" in Chinese\nDog presented to Queen Elizabeth in the 1930s, popularizing the breed in England\nThought to result from crossing Pekingese and Lhasa Apso breeds'
      }
    ]
  }
];

db.BreedInfo
.remove({})
.then(() => db.BreedInfo.collection.insertMany(dogBreedInfo))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});