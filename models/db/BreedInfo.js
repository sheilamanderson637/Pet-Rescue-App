const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA FOR STORING THE BREED DATA FROM WOLFRAM API
const BreedInfoSchema = new Schema({
  animalType: String,
  breedName: String,
  breedFacts: [{
    item: String,
    description: String
  }]
});

const BreedInfo = mongoose.model("BreedInfo", BreedInfoSchema);

module.exports = BreedInfo;