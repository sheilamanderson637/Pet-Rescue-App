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

//Seeding the breed collection with the breed recommendation (breed) for each search combination (breedId)

const breedLookupSeed = [
  {
    breedId: 'smallhomelightcalm',
    breed: 'Chihuahua'
  },
  {
    breedId: 'smallhomeanycalm',
    breed: 'Pug'
  },
  {
    breedId: 'smallhomelighthighenergy',
    breed: 'Beagle'
  },
  {
    breedId: 'smallhomeanyhighenergy',
    breed: 'Jack Russell Terrier'
  },
  {
    breedId: 'smallapartmentlightcalm',
    breed: 'Shih Tzu'
  },
  {
    breedId: 'smallapartmentanycalm',
    breed: 'Dachshund'
  },
  {
    breedId: 'smallapartmentlighthighenergy',
    breed: 'Poodle'
  },
  {
    breedId: 'smallapartmentanyhighenergy',
    breed: 'Corgi'
  },
  {
    breedId: 'mediumhomelightcalm',
    breed: 'Chow Chow'
  },
  {
    breedId: 'mediumhomeanycalm',
    breed: 'Hound'
  },
  {
    breedId: 'mediumhomelighthighenergy',
    breed: 'Pit Bull'
  },
  {
    breedId: 'mediumhomeanyhighenergy',
    breed: 'Labrador Retriever'
  },
  {
    breedId: 'mediumapartmentlightcalm',
    breed: 'Bulldog'
  },
  {
    breedId: 'mediumapartmentanycalm',
    breed: 'Shar Pei'
  },
  {
    breedId: 'mediumapartmentlighthighenergy',
    breed: 'Border Collie'
  },
  {
    breedId: 'mediumapartmentanyhighenergy',
    breed: 'Boxer'
  },
  {
    breedId: 'largehomelightcalm',
    breed: 'Mastiff'
  },
  {
    breedId: 'largehomeanycalm',
    breed: 'Great Dane'
  },
  {
    breedId: 'largehomelighthighenergy',
    breed: 'Pit Bull'
  },
  {
    breedId: 'largehomeanyhighenergy',
    breed: 'German Shepherd'
  },
  {
    breedId: 'largeapartmentlightcalm',
    breed: 'American Bulldog'
  },
  {
    breedId: 'largeapartmentanycalm',
    breed: 'Shar Pei'
  },
  {
    breedId: 'largeapartmentlighthighenergy',
    breed: 'Border Collie'
  },
  {
    breedId: 'largeapartmentanyhighenergy',
    breed: 'Greyhound'
  },
  {
    breedId: 'syesyes',
    breed: 'Bombay'
  },
  {
    breedId: 'syesno',
    breed: 'Russian Blue'
  },
  {
    breedId: 'snono',
    breed: 'Persian'
  },
  {
    breedId: 'snoyes',
    breed: 'Oriental'
  },
  {
    breedId: 'myesyes',
    breed: 'Siamese'
  },
  {
    breedId: 'myesno',
    breed: 'Russian Blue'
  },
  {
    breedId: 'mnono',
    breed: 'Persian'
  },
  {
    breedId: 'mnoyes',
    breed: 'Turkish Van'
  },
  {
    breedId: 'lyesyes',
    breed: 'Maine Coon'
  },
  {
    breedId: 'lyesno',
    breed: 'Russian Blue'
  },
  {
    breedId: 'lnono',
    breed: 'American Shorthair'
  },
  {
    breedId: 'lnoyes',
    breed: 'Manx'
  },
];

db.BreedLookup
.remove({})
.then(() => db.BreedLookup.collection.insertMany(breedLookupSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
